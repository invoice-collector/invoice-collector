import { createCursor, GhostCursor } from 'ghost-cursor';
import { Browser, Page } from "rebrowser-puppeteer-core";
import { solveCaptchas } from './captchas';
import { Proxy } from '../../proxy/abstractProxy';
import { AbstractBrowser } from './abstractBrowser';

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
    abstractBrowser?: AbstractBrowser
};

export async function pageController({
    browser,
    page,
    proxy,
    turnstile,
    killProcess = false,
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

    });

    const cursor = createCursor(page);
    const pageWithCursor = page as PageWithCursor;
    pageWithCursor.realCursor = cursor;
    pageWithCursor.realClick = cursor.click;
    return pageWithCursor;
}
