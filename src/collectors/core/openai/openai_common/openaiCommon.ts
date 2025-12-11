import { OpenaiSelectors } from './selectors';
import { Driver } from '../../../../driver/driver';
import { TwofaPromise } from '../../../../collect/twofaPromise';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { WebCollector } from '../../../web2Collector';

export abstract class OpenaiCommonCollector extends WebCollector {

    async needLogin(driver: Driver): Promise<boolean> {
        return await driver.getElement(OpenaiSelectors.BUTTON_LOGIN_OR_OUPS, { raiseException: false, timeout: 5000 }) != null ||
            driver.url().includes(this.config.loginUrl);
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Go to login page
        await driver.goto(this.config.loginUrl);

        // Input email
        await driver.inputText(OpenaiSelectors.FIELD_EMAIL, params.email);
        await driver.leftClick(OpenaiSelectors.BUTTON_EMAIL_CONTINUE, { navigation: false });

        // Check if email error is displayed
        const emailError = await driver.getElement(OpenaiSelectors.CONTAINER_EMAIL_ERROR, { raiseException: false, timeout: 2000 });
        if (emailError) {
            return await emailError.textContent("i18n.collectors.all.email.error");
        }

        // Wait for password field
        const passwordField = await driver.getElement(OpenaiSelectors.FIELD_PASSWORD, { raiseException: false });
        if (passwordField) {
            // Input password if displayed
            await passwordField.inputText(params.password);
            await driver.leftClick(OpenaiSelectors.BUTTON_PASSWORD_CONTINUE);

            // Check if password error is displayed
            const passwordError = await driver.getElement(OpenaiSelectors.CONTAINER_PASSWORD_ERROR, { raiseException: false, timeout: 5000 });
            if (passwordError) {
                return await passwordError.textContent("i18n.collectors.all.password.error");
            }
        }
    }

    async needTwofa(driver: Driver): Promise<string | void> {
        // If URL contains 2FA verification
        if(driver.url().includes("email-verification") ||
            driver.url().includes("mfa-challenge") ||
            driver.url().includes("push-auth-verification")) {
            // Check if 2FA instructions container is displayed
            const twofaInstructions = await driver.getElement(OpenaiSelectors.CONTAINER_2FA_INSTRUCTIONS, { raiseException: false, timeout: 2000 });
            if (twofaInstructions) {
                return await twofaInstructions.textContent("i18n.collectors.all.2fa.error");
            }
        }
    }

    async twofa(driver: Driver, params: any, twofa_promise: TwofaPromise, webSocketServer: WebSocketServer): Promise<string | void> {
        // Check if is push auth
        const isPushAuth = driver.url().includes("push-auth-verification");

        // Get code from UI
        const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);

        // If not push auth
        if(!isPushAuth) {
            // Input code
            await driver.inputText(OpenaiSelectors.FIELD_2FA_CODE, code);
            await driver.leftClick(OpenaiSelectors.BUTTON_2FA_CONTINUE);

            // Check if 2FA error is displayed
            const twofaError = await driver.getElement(OpenaiSelectors.CONTAINER_2FA_ERROR, { raiseException: false, timeout: 2000 });
            if (twofaError) {
                return await twofaError.textContent("i18n.collectors.all.2fa.error");
            }
        }
    }
}
