import os from 'os';
import fs from 'fs';
import path from 'path';
import dns from 'dns';
import * as crypto from 'crypto';
import date_fns from 'date-fns';
import { PDFDocument, PDFDict, asPDFName } from 'pdf-lib';
import JSZip from 'jszip';
import { fr, enGB, enUS } from 'date-fns/locale';
import { CollectorState, CollectorType, CompleteInvoice, Config } from './collectors/abstractCollector';

/* PUBLIC CONSTANTS */

export const DEBUG_ENABLED = getEnvVar('ENV', 'prod') === 'debug';
export const PORT = getEnvVar('PORT');
export const BACKEND_URI = DEBUG_ENABLED ? `http://localhost:${PORT}` : 'https://api.invoice-collector.com';
export const IS_SELF_HOSTED = getEnvVar('IS_SELF_HOSTED', 'true').toLowerCase() === 'true';

/* PRIVATE CONSTANTS */

const FAKE_INVOICE_FILE = path.resolve(__dirname, '../data/fake_invoice.pdf');
const MIMETYPE_BASE64_SIGNATURE = {
    JVBERi0: 'application/pdf',
    ACVQREY: 'application/pdf',
    iVBORw0KGgo: 'image/png',
    '/9j/': 'image/jpg',
    'UEsDB': 'application/zip',
};

/* ENUMS */

export enum BearerType {
    CUSTOMER_SESSION = 'c_sess',
    USER_SESSION = 'u_sess',
    API = 'api'
}

/* FUNCTIONS */

export function generate_bearer(type: BearerType, size=128): string {
    return `${type}_${crypto.randomBytes(size).toString('base64')}`;
}

export function generate_token(size=64): string {
    return crypto.randomBytes(size).toString('hex');
}

export function hash_string(input: string, algorithm: string = 'sha3-512'): string {
    return crypto.createHash(algorithm).update(input).digest('hex');
}

const SCRYPT_KEY_LENGTH = 64;

/**
 * Hashes a low-entropy secret (password) with a random per-secret salt and a slow KDF (scrypt),
 * unlike `hash_string` which is meant for high-entropy random tokens/bearers.
 * @param password The plaintext password to hash.
 * @returns A string of the form "salt:derivedKey", both hex-encoded.
 */
export function hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString('hex');
    const derivedKey = crypto.scryptSync(password, salt, SCRYPT_KEY_LENGTH);
    return `${salt}:${derivedKey.toString('hex')}`;
}

/**
 * Verifies a plaintext password against a hash produced by `hashPassword`, in constant time.
 * @param password The plaintext password to verify.
 * @param storedHash The "salt:derivedKey" hash to verify against.
 * @returns Whether the password matches the stored hash.
 */
export function verifyPassword(password: string, storedHash: string): boolean {
    const [salt, key] = (storedHash || '').split(':');
    if (!salt || !key) {
        return false;
    }

    const keyBuffer = Buffer.from(key, 'hex');
    const derivedBuffer = crypto.scryptSync(password, salt, SCRYPT_KEY_LENGTH);

    if (keyBuffer.length !== derivedBuffer.length) {
        return false;
    }

    return crypto.timingSafeEqual(keyBuffer, derivedBuffer);
}

// CIDR ranges that must never be reachable from server-initiated outbound requests (SSRF guard)
const BLOCKED_IPV4_RANGES: Array<[string, number]> = [
    ['0.0.0.0', 8],       // "this" network
    ['10.0.0.0', 8],      // private
    ['100.64.0.0', 10],   // carrier-grade NAT
    ['127.0.0.0', 8],     // loopback
    ['169.254.0.0', 16],  // link-local / cloud metadata (169.254.169.254)
    ['172.16.0.0', 12],   // private
    ['192.0.0.0', 24],    // IETF protocol assignments
    ['192.168.0.0', 16],  // private
    ['198.18.0.0', 15],   // benchmarking
    ['224.0.0.0', 4],     // multicast
    ['240.0.0.0', 4],     // reserved
];

function ipv4ToInt(ip: string): number {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0;
}

function isPrivateIpv4(ip: string): boolean {
    const ipInt = ipv4ToInt(ip);
    return BLOCKED_IPV4_RANGES.some(([base, bits]) => {
        const mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
        return (ipInt & mask) === (ipv4ToInt(base) & mask);
    });
}

function isPrivateIpv6(ip: string): boolean {
    const normalized = ip.toLowerCase();
    return normalized === '::1'                      // loopback
        || normalized.startsWith('::ffff:127.')      // IPv4-mapped loopback
        || normalized.startsWith('::ffff:10.')       // IPv4-mapped private
        || normalized.startsWith('::ffff:169.254.')  // IPv4-mapped link-local
        || normalized.startsWith('fe80:')            // link-local
        || normalized.startsWith('fc')                // unique local
        || normalized.startsWith('fd');               // unique local
}

/**
 * Guards against SSRF: ensures a user-supplied URL uses HTTPS and, unless self-hosted (where the
 * destination is expected to be able to be a private/internal address on the deployer's own
 * network), resolves to a public, non-internal address before the server is allowed to send a
 * request to it.
 * @param rawUrl The URL to validate.
 */
export async function assertPublicHttpsUrl(rawUrl: string): Promise<void> {
    let parsed: URL;
    try {
        parsed = new URL(rawUrl);
    } catch {
        throw new Error(`"${rawUrl}" is not a valid URL.`);
    }

    if (parsed.protocol !== 'https:') {
        throw new Error('URL must use HTTPS.');
    }

    // Self-hosted deployments own their whole network, so private/internal destinations are expected
    if (IS_SELF_HOSTED) {
        return;
    }

    if (parsed.hostname === 'localhost') {
        throw new Error('URL cannot target localhost.');
    }

    let address: string;
    let family: number;
    try {
        ({ address, family } = await dns.promises.lookup(parsed.hostname));
    } catch {
        throw new Error(`Could not resolve hostname "${parsed.hostname}".`);
    }

    const isPrivate = family === 4 ? isPrivateIpv4(address) : isPrivateIpv6(address);
    if (isPrivate) {
        throw new Error('URL resolves to a non-routable or internal address and is not allowed.');
    }
}

// Per-key serialization to close TOCTOU gaps around check-then-act operations (e.g. plan quota checks)
const keyLocks = new Map<string, Promise<unknown>>();

/**
 * Runs `fn` exclusively with respect to any other call sharing the same `key`, serializing
 * concurrent invocations so check-then-act sequences (e.g. quota checks) can't race each other.
 * @param key The lock key. Calls with different keys run concurrently.
 * @param fn The function to run once the lock for `key` is acquired.
 */
export async function withLock<T>(key: string, fn: () => Promise<T>): Promise<T> {
    const previous = keyLocks.get(key) ?? Promise.resolve();
    const run = previous.then(fn, fn);
    // Swallow errors here so the chain never gets stuck; the real error still propagates via `run`
    keyLocks.set(key, run.catch(() => undefined));
    return run;
}

/**
 * Wait for a specified number of milliseconds.
 * @param ms The number of milliseconds to wait. Does not wait if ms is 0.
 */
export async function delay(ms: number): Promise<void> {
    if (ms !== 0) {
        await new Promise(function(resolve) {
            setTimeout(resolve, ms);
        });
    }
}

export function parseBoolean(value: unknown, fallback: boolean): boolean {
    if (typeof value === 'boolean') {
        return value;
    }
    if (typeof value === 'string') {
        const normalizedValue = value.trim().toLowerCase();
        if (['true', '1', 'yes', 'on'].includes(normalizedValue)) {
            return true;
        }
        if (['false', '0', 'no', 'off'].includes(normalizedValue)) {
            return false;
        }
    }
    return fallback;
}

export function randomDelay(min: number=200, max: number=400): Promise<void> {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delay);
    });
}

export function timestampFromString(date: string, formats: string | string[], locale: string): number {
    // Trim date string
    date = trim(date);

    // If format is a string, convert to array
    if (typeof formats === 'string') {
        formats = [formats];
    }

    const fnsLocales = {
        fr,
        uk: enGB,
        en: enGB,
        engb: enGB,
        us: enUS,
        enus: enUS,
    };

    const locales = [fnsLocales[trim(locale).toLowerCase()], enUS];

    // For each locale
    for (const dateFnsLocale of locales) {
        // For each format
        for (const format of formats) {
            // Try to parse date
            const parsedDate = date_fns.parse(date.trim(), format, new Date(), { locale: dateFnsLocale });

            // Check if parsing succeeded
            if (!isNaN(parsedDate.getTime())) {
                return parsedDate.setUTCMilliseconds(0);
            }
        }
    }
    // Raise error if no format matched
    throw new Error(`Unable to parse date: ${date} with formats: ${formats} and locale: ${locale}`);
}

export function wildcardToRegex(pattern: string): RegExp {
    const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${  escaped.replace(/\*/g, '.*')  }$`, 'i');
}

export function mimetypeFromBase64(base64: string | null): string {
    if(base64 === null) {
        return 'application/octet-stream';
    }

    for (const s in MIMETYPE_BASE64_SIGNATURE) {
        if (base64.startsWith(s)) {
            return MIMETYPE_BASE64_SIGNATURE[s];
        }
    }

    throw Error(`Unknown mimetype for base64 string starting with ${base64.slice(0, 100)}`);
}

export async function mergePdfDocuments(documents: string[]): Promise<string> {
    // Initialize document
    const pdfDoc = await PDFDocument.create();

    // For each document
    for (const document of documents) {
        // Get mimetype
        const mimetype = mimetypeFromBase64(document);

        // If mimetype is pdf
        if(mimetype === 'application/pdf') {
            // Load PDF document and add each page to final pdf
            const documentPdf = await PDFDocument.load(document);
            const pages = await pdfDoc.copyPages(documentPdf, documentPdf.getPageIndices());
            pages.forEach(page => pdfDoc.addPage(page));
        }
        else if (mimetype.startsWith('image/')) {
            // Attach image to pdf
            let image;
            if (mimetype === 'image/png') {
                image = await pdfDoc.embedPng(document);
            }
            else if (mimetype === 'image/jpg' || mimetype === 'image/jpeg') {
                image = await pdfDoc.embedJpg(document);
            }
            else {
                throw new Error(`Cannot merge unsupported mimetype ${mimetype}`);
            }

            // Get image dimensions
            const imageDims = image.scale(0.75);
            // Add a blank page to the document
            const page = pdfDoc.addPage();
            // Draw the image in the center of the page
            page.drawImage(image, {
                x: page.getWidth() / 2 - imageDims.width / 2,
                y: page.getHeight() / 2 - imageDims.height / 2,
                width: imageDims.width,
                height: imageDims.height,
            });
        }
        else {
            throw new Error(`Cannot merge unsupported mimetype ${mimetype}`);
        }
    }

    return await pdfDoc.saveAsBase64();
}

// Zip-bomb guards: caps on entry count and total decompressed bytes when extracting untrusted zips
const ZIP_MAX_ENTRIES = 100;
const ZIP_MAX_TOTAL_DECOMPRESSED_BYTES = 200 * 1024 * 1024; // 200MB

export async function extractPdfFromZip(invoice: CompleteInvoice): Promise<CompleteInvoice[]> {
    if (!invoice.data) {
        throw new Error(`Cannot extract PDFs from zip for invoice ${invoice.id}: missing invoice data.`);
    }

    const zip = await JSZip.loadAsync(Buffer.from(invoice.data, 'base64'));
    const zipEntries = Object.values(zip.files)
        .filter(entry => !entry.dir && entry.name.toLowerCase().endsWith('.pdf'));

    if (zipEntries.length === 0) {
        throw new Error(`No PDF file found in zip for invoice ${invoice.id}.`);
    }

    if (zipEntries.length > ZIP_MAX_ENTRIES) {
        throw new Error(`Zip for invoice ${invoice.id} contains too many entries (max ${ZIP_MAX_ENTRIES}).`);
    }

    const invoices: CompleteInvoice[] = [];
    let totalDecompressedBytes = 0;
    for (const entry of zipEntries) {
        const data = await entry.async('base64');

        // Base64 decodes to roughly 3/4 of its length
        totalDecompressedBytes += Math.ceil(data.length * 3 / 4);
        if (totalDecompressedBytes > ZIP_MAX_TOTAL_DECOMPRESSED_BYTES) {
            throw new Error(`Zip for invoice ${invoice.id} exceeds max decompressed size (${ZIP_MAX_TOTAL_DECOMPRESSED_BYTES} bytes).`);
        }

        invoices.push({
            ...invoice,
            data,
            mimetype: mimetypeFromBase64(data),
            hash: hash_string(data, 'md5'),
        });
    }

    return invoices;
}

export function generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString().padStart(6, '0');
}

export function trim(str: string): string {
    return str.trim().replaceAll('\n', ' ').replace(/  +/g, ' ');
}

export function generateUserAgent()  {
    const chromeVersion = Math.floor(Math.random() * 20) + 60;
    const webkitVersion = Math.floor(Math.random() * 700) + 500;
    const osPlatform =
      os.platform() === 'win32'
        ? 'Win64; x64'
        : 'Macintosh; Intel Mac OS X 10_15_0';
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.3163.100 Safari/${webkitVersion}.36`;
    return userAgent;
}

export function getEnvVar(envVar: string, fallback: string | undefined = undefined): string {
    const value = process.env[envVar];
    // If the value is undefined or empty
    if (value === undefined || value === '') {
        // If no fallback is provided, throw an error
        if (fallback === undefined) {
            throw new Error(`Environment variable ${envVar} is not set. See: https://invoice-collector.com/docs/developers/environment-variables`);
        }
        return fallback;
    }
    return value;
}

export function createFakeInvoice(): {
        collector: Config,
        remote_id: string,
        invoice: CompleteInvoice
    } {
    const data = fs.readFileSync(FAKE_INVOICE_FILE, {encoding: 'base64'});
    const invoice = {
        id: 'INV-3337',
        timestamp: Date.now(),
        amount: '$93.50',
        link: 'https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf',
        data,
        mimetype: mimetypeFromBase64(data),
        hash: hash_string(data, 'md5'),
        metadata: { contract: 'CON-1234' },
        downloadButton: null,
        collected_timestamp: Date.now(),
    };
    return {
        collector: createFakeCollectorConfig(),
        remote_id: 'R121439',
        invoice,
    };
}

export function createFakeNotificationDisconnected(): {
        collector: Config,
        credential_id: string,
        user_id: string,
        remote_id: string
    } {
    return {
        collector: createFakeCollectorConfig(),
        credential_id: '6776b5258821de266afbc3f6',
        user_id: '687108e5dce5050bc8ca53c1',
        remote_id: 'R121439',
    };
}

export function createFakeCollectorConfig(): Config {
    return {
        id: 'sliced_invoices',
        name: 'Sliced Invoices',
        description: 'A fake collector for testing purposes',
        instructions: 'Follow the instructions',
        version: '12',
        website: 'https://slicedinvoices.com',
        logo: 'https://slicedinvoices.com/wp-content/uploads/2018/04/sliced-invoices-logo-1.png',
        type: CollectorType.WEB,
        params: {
            email: {
                type: 'email',
                name: 'i18n.collectors.all.email',
                placeholder: 'i18n.collectors.all.email.placeholder',
                mandatory: true,
            },
            password: {
                type: 'password',
                name: 'i18n.collectors.all.password',
                placeholder: 'i18n.collectors.all.password.placeholder',
                mandatory: true,
            },
        },
        state: CollectorState.ACTIVE,
    };
}

export function checkAmountContainsCurrencySymbol(amount: string): void {
    // Check if amount is empty
    if (!amount || amount.trim() === '') {
        throw new Error('Amount is empty.');
    }

    // Check if amount contains a currency symbol
    const currencySymbolRegex = /[^\d.,\s]/;
    if (!currencySymbolRegex.test(amount)) {
        throw new Error(`Amount "${amount}" does not contain a currency symbol.`);
    }
}

export function checkEmailIsValid(email: string): boolean {
    // Check if email is empty
    if (!email || email.trim() === '') {
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return false;
    }
    return true;
}

export function convertNameToInviteId(name: string): string {
    // Remove all special characters by nothing
    name = name.trim().toLowerCase().replace(/[^a-z0-9\s]+/g, '');

    // Replace all spaces by dashes
    name = name.replace(/\s+/g, '-');

    // Add a random 5 characters string at the end to ensure uniqueness
    name = `${name  }-${  crypto.randomBytes(3).toString('hex')}`;

    return name;
}

export async function getLinksFromPdfDocument(data: string): Promise<string[]> {
    const links: string[] = [];
    const documentPdf = await PDFDocument.load(data);
    const pages = documentPdf.getPages();
    pages.forEach((p) => {
        p.node
        .Annots()
        ?.asArray()
        .forEach((a) => {
            const dict = documentPdf.context.lookupMaybe(a, PDFDict);
            if (!dict) {return;}
            const aRecord = dict.get(asPDFName('A'));
            const link = documentPdf.context.lookupMaybe(aRecord, PDFDict);
            if (!link) {return;}
            const pdfObject = link.get(asPDFName('URI'));
            if(!pdfObject) {return;}
            const uri = pdfObject.toString().slice(1, -1); // get the original link, remove parenthesis
            if (uri.startsWith('http')) {
                links.push(uri);
            }
        });
    });
    return links;
}
