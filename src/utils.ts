import os from 'os'
import fs from 'fs';
import path from 'path';
import * as crypto from 'crypto';
import date_fns from 'date-fns';
import { PDFDocument } from 'pdf-lib';
import { fr, enGB, enUS } from 'date-fns/locale';
import { CompleteInvoice } from './collectors/abstractCollector';

const FAKE_INVOICE_FILE = path.resolve(__dirname, '../data/fake_invoice.pdf');

export function generate_bearer(size=128): string {
    return crypto.randomBytes(size).toString('base64');
}

export function generate_token(size=64): string {
    return crypto.randomBytes(size).toString('hex');
}

export function hash_string(input: string): string {
    return crypto.createHash('sha3-512').update(input).digest('hex');
}

export function delay(ms) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, ms)
    });
}

export function randomDelay(min: number=200, max: number=400): Promise<void> {
    return new Promise(resolve => {
        const delay = Math.floor(Math.random() * (max - min + 1)) + min;
        setTimeout(resolve, delay);
    });
}

export function timestampFromString(date: string, format: string, locale: string): number {
    const fnsLocales = {
        fr: fr,
        uk: enGB,
        en: enGB,
        engb: enGB,
        us: enUS,
        enus: enUS,
    };

    const dateFnsLocale = fnsLocales[trim(locale).toLowerCase()];
    let parsedDate = date_fns.parse(date.trim(), format, new Date(Date.UTC(1970, 0, 1)), { locale: dateFnsLocale });

    // Check if parsing failed
    if (isNaN(parsedDate.getTime())) {
        // Try to do it with default locale
        parsedDate = date_fns.parse(date.trim(), format, new Date(Date.UTC(1970, 0, 1)), { locale: enUS });
    
        // Check if parsing failed again
        if (isNaN(parsedDate.getTime())) {
            throw new Error(`Unable to parse date: ${date} with format: ${format} and locale: ${locale}`);
        }
    }

    return parsedDate.setUTCMilliseconds(0);
}

export function mimetypeFromBase64(base64: string | null): string {
    if(base64 == null) {
        return 'application/octet-stream';
    }

    var signatures = {
        JVBERi0: "application/pdf",
        iVBORw0KGgo: "image/png",
        "/9j/": "image/jpg"
      };

      for (var s in signatures) {
        if (base64.startsWith(s)) {
            return signatures[s];
        }
    }

    throw Error(`Unknown mimetype for base64 string starting with ${base64.slice(0, 10)}`);
}

export async function mergePdfDocuments(documents: string[]): Promise<string> {
    // Initialize document
    const pdfDoc = await PDFDocument.create();

    // For each document
    for (const document of documents) {
        // Get mimetype
        const mimetype = mimetypeFromBase64(document);

        // If mimetype is pdf
        if(mimetype == "application/pdf") {
            // Load PDF document and add each page to final pdf
            const documentPdf = await PDFDocument.load(document);
            const pages = await pdfDoc.copyPages(documentPdf, documentPdf.getPageIndices());
            pages.forEach(page => pdfDoc.addPage(page));
        }
        else if (mimetype.startsWith("image/")) {
            // Attach image to pdf
            let image;
            if (mimetype === "image/png") {
                image = await pdfDoc.embedPng(document);
            }
            else if (mimetype === "image/jpg" || mimetype === "image/jpeg") {
                image = await pdfDoc.embedJpg(document);
            }
            else {
                throw new Error(`Cannot merge unsupported mimetype ${mimetype}`);
            }

            // Get image dimensions
            const imageDims = image.scale(0.75);
            // Add a blank page to the document
            const page = pdfDoc.addPage()
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

export function generateVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString().padStart(6, '0');
}

export function trim(str: string): string {
    return str.trim().replaceAll('\n', ' ').replace(/  +/g, ' ');
}

export function generateUserAgent()  {
    const chromeVersion = Math.floor(Math.random() * 20) + 60
    const webkitVersion = Math.floor(Math.random() * 700) + 500
    const osPlatform =
      os.platform() === 'win32'
        ? 'Win64; x64'
        : 'Macintosh; Intel Mac OS X 10_15_0'
    const userAgent = `Mozilla/5.0 (${osPlatform}) AppleWebKit/${webkitVersion}.36 (KHTML, like Gecko) Chrome/${chromeVersion}.0.3163.100 Safari/${webkitVersion}.36`
    return userAgent
}

export function getEnvVar(envVar: string, fallback: string | undefined = undefined): string {
    const value = process.env[envVar];
    // If the value is undefined or empty
    if (value === undefined || value === "") {
        // If no fallback is provided, throw an error
        if (fallback === undefined) {
            throw new Error(`Environment variable ${envVar} is not set. See: https://invoice-collector.com/docs/developers/environment-variables`);
        }
        return fallback
    }
    return value;
}

export function createFakeInvoice(): { collector_id: string, remote_id: string, invoice: CompleteInvoice } {
    const data = fs.readFileSync(FAKE_INVOICE_FILE, {encoding: 'base64'});
    const invoice = {
        id: "INV-3337",
        timestamp: Date.now(),
        amount: "$93.50",
        link: "https://slicedinvoices.com/pdf/wordpress-pdf-invoice-plugin-sample.pdf",
        data: data,
        mimetype: mimetypeFromBase64(data),
        metadata: { contract: "CON-1234" },
        collected_timestamp: Date.now()
    };
    return {
        collector_id: "sliced_invoices",
        remote_id: "R121439",
        invoice
    }
}

export function createFakeNotificationDisconnected(): {
        collector_id: string,
        credential_id: string,
        user_id: string,
        remote_id: string
    } {
    return {
        collector_id: "sliced_invoices",
        credential_id: "6776b5258821de266afbc3f6",
        user_id: "687108e5dce5050bc8ca53c1",
        remote_id: "R121439",
    };
}

export function checkAmountContainsCurrencySymbol(amount: string): void {
    // Check if amount is empty
    if (!amount || amount.trim() === "") {
        throw new Error("Amount is empty.");
    }

    // Check if amount contains a currency symbol
    const currencySymbolRegex = /[^\d.,\s]/;
    if (!currencySymbolRegex.test(amount)) {
        throw new Error(`Amount "${amount}" does not contain a currency symbol.`);
    }
}
