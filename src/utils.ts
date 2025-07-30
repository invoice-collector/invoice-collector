import os from 'os'
import fs from 'fs';
import path from 'path';
import * as crypto from 'crypto';
import date_fns from 'date-fns';
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
    const parsedDate = date_fns.parse(date.trim(), format, new Date(Date.UTC(1970, 0, 1)), { locale: dateFnsLocale });
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
    console.warn(`Unknown mimetype for base64 string starting with ${base64.slice(0, 10)}`);
    return 'application/octet-stream';
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