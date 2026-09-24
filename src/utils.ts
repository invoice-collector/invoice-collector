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
import { DatabaseFactory } from './database/databaseFactory';

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

/**
 * Generates a bearer token of the specified type.
 * @param type The type of bearer token to generate.
 * @param size The size of the random component of the token, in bytes. Defaults to 128.
 * @returns The generated bearer token as a string.
 */
export function generate_bearer(type: BearerType, size=128): string {
    return `${type}_${crypto.randomBytes(size).toString('base64')}`;
}

/**
 * Generates a random token of the specified size.
 * @param size The size of the random token in bytes. Defaults to 64.
 * @returns The generated token as a hexadecimal string.
 */
export function generate_token(size=64): string {
    return crypto.randomBytes(size).toString('hex');
}

/**
 * Hashes the given input string using the specified cryptographic hash algorithm.
 * @param input The input string to hash.
 * @param algorithm The hash algorithm to use. Defaults to 'sha3-512'.
 * @returns The hexadecimal representation of the hash.
 */
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

/**
 * Converts an IPv4 address from its dotted-decimal string representation to a 32-bit integer.
 * @param ip The IPv4 address in dotted-decimal notation (e.g., "192.168.0.1").
 * @returns The 32-bit integer representation of the IPv4 address.
 */
function ipv4ToInt(ip: string): number {
    return ip.split('.').reduce((acc, octet) => (acc << 8) + Number(octet), 0) >>> 0;
}

/**
 * Checks if an IPv4 address falls within any of the blocked private/internal ranges.
 * @param ip The IPv4 address in dotted-decimal notation (e.g., "192.168.0.1").
 * @returns True if the IP is private/internal, false otherwise.
 */
function isPrivateIpv4(ip: string): boolean {
    const ipInt = ipv4ToInt(ip);
    return BLOCKED_IPV4_RANGES.some(([base, bits]) => {
        const mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
        return (ipInt & mask) === (ipv4ToInt(base) & mask);
    });
}

/**
 * Checks if an IPv6 address falls within any of the blocked private/internal ranges.
 * @param ip The IPv6 address in standard notation (e.g., "fe80::1").
 * @returns True if the IP is private/internal, false otherwise.
 */
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

/**
 * Parses a value as a boolean, with a fallback if parsing fails.
 * @param value The value to parse as a boolean.
 * @param fallback The fallback boolean value to return if parsing fails.
 * @returns The parsed boolean value, or the fallback if parsing fails.
 */
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

/**
 * Waits for a random amount of time between the specified minimum and maximum milliseconds.
 * @param min The minimum number of milliseconds to wait.
 * @param max The maximum number of milliseconds to wait.
 * @returns A promise that resolves after the random delay.
 */
export function randomDelay(min: number=200, max: number=400): Promise<void> {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delay);
    });
}

/**
 * Parses a date string according to the specified formats and locale, returning the corresponding timestamp.
 * @param date The date string to parse.
 * @param formats The date format(s) to use for parsing.
 * @param locale The locale to use for parsing.
 * @returns The timestamp (in milliseconds) corresponding to the parsed date.
 */
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

/**
 * Converts a wildcard pattern to a regular expression.
 * @param pattern The wildcard pattern to convert (e.g., "*.txt").
 * @returns A RegExp object representing the equivalent regular expression.
 */
export function wildcardToRegex(pattern: string): RegExp {
    const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${  escaped.replace(/\*/g, '.*')  }$`, 'i');
}

/**
 * Determines the MIME type of a base64-encoded string.
 * @param base64 The base64-encoded string to check.
 * @returns The MIME type corresponding to the base64 string, or 'application/octet-stream' if unknown.
 */
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

/**
 * Merges multiple PDF documents and images into a single PDF document.
 * @param documents An array of base64-encoded PDF or image documents to merge.
 * @returns A promise that resolves to a base64-encoded string of the merged PDF document.
 */
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

/**
 * Extracts PDF files from a ZIP archive contained within an invoice.
 * @param invoice The invoice containing the ZIP archive.
 * @returns A promise that resolves to an array of invoices, each containing a single extracted PDF file.
 */
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

/**
 * Generates a 6-digit verification code as a string.
 * @returns A string representing the 6-digit verification code.
 */
export function generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString().padStart(6, '0');
}

export function trim(str: string): string {
    return str.trim().replaceAll('\n', ' ').replace(/  +/g, ' ');
}

/**
 * Generates a random User-Agent string mimicking a Chrome browser.
 * @returns A string representing the User-Agent.
 */
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

/**
 * Gets the value of an environment variable, with an optional fallback.
 * @param envVar The name of the environment variable to retrieve.
 * @param fallback An optional fallback value to use if the environment variable is not set.
 * @returns The value of the environment variable, or the fallback if provided and the variable is not set.
 */
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

/**
 * Creates a fake invoice for testing purposes.
 * @returns An object representing the fake invoice, including the collector configuration, remote ID, and invoice details.
 */
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

/**
 * Creates a fake notification indicating a disconnected state for testing purposes.
 * @returns An object representing the fake disconnected notification, including the collector configuration, credential ID, user ID, and remote ID.
 */
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

/**
 * Creates a fake collector configuration for testing purposes.
 * @returns An object representing the fake collector configuration.
 */
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

/**
 * Checks if the given amount contains a currency symbol.
 * @param amount The amount string to check for a currency symbol.
 * @throws Will throw an error if the amount is empty or does not contain a currency symbol.
 */
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

/**
 * Checks if the given email is valid.
 * @param email The email string to validate.
 * @returns A boolean indicating whether the email is valid.
 */
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

/**
 * Converts a name string into a unique invite ID suitable for use in URLs or identifiers.
 * @param name The name string to convert into an invite ID.
 * @returns A unique invite ID string derived from the given name.
 */
export function convertNameToInviteId(name: string): string {
    // Remove all special characters by nothing
    name = name.trim().toLowerCase().replace(/[^a-z0-9\s]+/g, '');

    // Replace all spaces by dashes
    name = name.replace(/\s+/g, '-');

    // Add a random 5 characters string at the end to ensure uniqueness
    name = `${name  }-${  crypto.randomBytes(3).toString('hex')}`;

    return name;
}

/**
 * Extracts all links from a PDF document.
 * @param data The PDF document data as a string.
 * @returns A promise that resolves to an array of links found in the PDF document.
 */
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

/**
 * Gets months between two dates.
 * @param startTimestamp The start date as a timestamp
 * @param endDate The end date as a Date object (default is current date)
 * @returns An array of months in the format "yyyy-mm" between the start and end dates
 */
export function getMonthsBetween(startTimestamp: number, endDate: Date, excludeFirstMonth: boolean, excludeLastMonth: boolean): string[] {
    const startDate = new Date(startTimestamp);
    const months: string[] = [];

    // Clone the start date to avoid modifying the original
    const currentDate = new Date(startDate);

    // Loop until we reach the end date
    while (currentDate <= endDate) {
        // Format as yyyy-mm
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        months.push(`${year}-${month}`);

        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    // Exclude the first month if the flag is set
    if (excludeFirstMonth && months.length > 0) {
        months.shift();
    }
    // Exclude the last month if the flag is set
    if (excludeLastMonth && months.length > 0) {
        months.pop();
    }
    return months;
}

// COUNTERS

const COUNTER_BILL = 'bill';

/**
 * Generates a unique bill ID based on the current counter value.
 * @returns A promise that resolves to the generated bill ID string.
 */
export async function generateBillId(): Promise<string> {
    const number = await DatabaseFactory.getDatabase().getCounter(COUNTER_BILL);
    return`INV-${number}`;
}
