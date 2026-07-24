import { createCursor, GhostCursor } from 'ghost-cursor';
import { Browser, Page } from "rebrowser-puppeteer-core";
import { solveCaptchas } from './captchas';
import { Proxy } from '../../proxy/abstractProxy';
import { AbstractBrowser } from '../browser/abstractBrowser';

export interface PageWithCursor extends Page {
  realClick: GhostCursor["click"];
  realCursor: GhostCursor;
}

export interface PageControllerOptions {
    browser: Browser,
    page: Page,
    proxy: Proxy | null,
    turnstile: boolean,
    killProcess: boolean,
    locale: string,
    abstractBrowser?: AbstractBrowser
};

export async function pageController({
    browser,
    page,
    proxy,
    turnstile,
    killProcess = false,
    locale,
    abstractBrowser
}: PageControllerOptions): Promise<PageWithCursor> {

    let solveStatus = turnstile

    page.on('close', () => {
        solveStatus = false
    });

    browser.on('disconnected', async () => {
        solveStatus = false
        if (killProcess === true) {
            if (abstractBrowser) try { abstractBrowser.close() } catch (err) { console.log(err); }
        }
    });

    async function captchaSolver() {
        while (solveStatus) {
            await solveCaptchas({ page }).catch(() => { });
            await new Promise(r => setTimeout(r, 5000));
        }
        return
    }

    // Define locale on new page
    await page.setExtraHTTPHeaders({
        'Accept-Language': `${locale},${locale.split('-')[0]};q=0.9,en;q=0.8`,
    });

    captchaSolver()

    if (proxy && proxy.username && proxy.password) await page.authenticate({ username: proxy.username, password: proxy.password });

    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(MouseEvent.prototype, 'screenX', {
            get: function () {
                return this.clientX + window.screenX;
            }
        });

        Object.defineProperty(MouseEvent.prototype, 'screenY', {
            get: function () {
                return this.clientY + window.screenY;
            }
        });

        // Prevent the native Windows Hello / passkey dialogs (both the "save the
        // private key" enrollment popup and the "sign in with a passkey / enter PIN"
        // authentication popup) by rejecting the WebAuthn API. The site then falls
        // back to password-based sign-in instead of triggering the OS dialog.
        if (navigator.credentials) {
            const rejectWebauthn = () =>
                Promise.reject(new DOMException('Passkey disabled', 'NotAllowedError'));
            if (navigator.credentials.create) {
                navigator.credentials.create = rejectWebauthn;
            }
            if (navigator.credentials.get) {
                navigator.credentials.get = rejectWebauthn;
            }
            // Report platform authenticator (Windows Hello) as unavailable so the site doesn't even offer the passkey path.
            if ((window as any).PublicKeyCredential) {
                (window as any).PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable =
                    () => Promise.resolve(false);
                if ((window as any).PublicKeyCredential.isConditionalMediationAvailable) {
                    (window as any).PublicKeyCredential.isConditionalMediationAvailable =
                        () => Promise.resolve(false);
                }
            }
        }
    });

    const cursor = createCursor(page);
    const pageWithCursor = page as PageWithCursor;
    pageWithCursor.realCursor = cursor;
    pageWithCursor.realClick = cursor.click;
    return pageWithCursor;
}
