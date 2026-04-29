import { ElementHandle } from "rebrowser-puppeteer-core";

const CAPTCHAS = {
    turnstile: {
        cssSelector: "[name='cf-turnstile-response']:not([value])",
        computeCoordinates: async (element) => {
            const parentElement = await element.evaluateHandle(el => el.parentElement);
            const box = await parentElement.boundingBox();
            return {
                x: box.x + 30,
                y: box.y + box.height / 2
            };
        }
    },
    friendlyCaptcha: {
        cssSelector: "input.frc-captcha-solution[value='.UNSTARTED']",
        computeCoordinates: async (element) => {
            const button = await element.evaluateHandle(el => el.parentElement?.querySelector("button.frc-button"));
            const box = await button.boundingBox();
            return {
                x: box.x + box.width / 2,
                y: box.y + box.height / 2
            };
        }
    }
}

export const solveCaptchas = ({ page }) => {
    return new Promise(async (resolve, reject) => {
        var waitInterval = setTimeout(() => { clearInterval(waitInterval); resolve(false) }, 5000);
        try {
            for (const captchaType in CAPTCHAS) {
                const captcha = CAPTCHAS[captchaType];
                const elements: ElementHandle[] = await page.$$(captcha.cssSelector);
                for (const element of elements) {
                    try {
                        const { x, y } = await captcha.computeCoordinates(element);
                        await page.mouse.click(x, y);
                    } catch (err) {}
                }
            }
            clearInterval(waitInterval)
            resolve(true)
        } catch (err) {
            clearInterval(waitInterval)
            resolve(false)
        }
    })
}
