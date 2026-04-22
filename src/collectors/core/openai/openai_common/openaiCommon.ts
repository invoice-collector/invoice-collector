import { OpenaiSelectors } from './selectors';
import { Driver } from '../../../../driver/driver';
import { TwofaPromise } from '../../../../collect/twofaPromise';
import { WebSocketServer } from '../../../../websocket/webSocketServer';
import { WebCollector } from '../../../webCollector';
import { Invoice } from '../../../abstractCollector';
import { GoogleOauth2 } from '../../../oauth2/googleOauth2';
import { MicrosoftOauth2 } from '../../../oauth2/microsoftOauth2';

export abstract class OpenaiCommonCollector extends WebCollector {

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

        // Perform google oauth2 if needed
        if(GoogleOauth2.check(driver)) {
            return await GoogleOauth2.login(driver, params, webSocketServer);
        }
        // Perform microsoft oauth2 if needed
        if(MicrosoftOauth2.check(driver)) {
            return await MicrosoftOauth2.login(driver, params, webSocketServer);
        }

        // Wait for password field
        const passwordField = await driver.getElement(OpenaiSelectors.FIELD_PASSWORD, { raiseException: false, timeout: 100 });
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
        // Perform google oauth2 if needed
        if(GoogleOauth2.check(driver)) {
            return await GoogleOauth2.needTwofa(driver);
        }
        // Perform microsoft oauth2 if needed
        if(MicrosoftOauth2.check(driver)) {
            return await MicrosoftOauth2.needTwofa(driver);
        }

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
        // Perform google oauth2 if needed
        if(GoogleOauth2.check(driver)) {
            return await GoogleOauth2.twofa(driver, params, twofa_promise, webSocketServer);
        }
        // Perform microsoft oauth2 if needed
        if(MicrosoftOauth2.check(driver)) {
            return await MicrosoftOauth2.twofa(driver, params, twofa_promise, webSocketServer);
        }

        // Check if is email verification
        const isEmailVerification = driver.url().includes("auth.openai.com/email-verification");

        // Get code from UI
        const code = await Promise.race([twofa_promise.code(), webSocketServer.getTwofa()]);

        // If is email verification
        if(isEmailVerification) {
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

    async download(driver: Driver, invoice: Invoice): Promise<string[]> {
        // Open invoice in new tab
        await invoice.downloadButton.middleClick();
        // Download PDF
        await driver.leftClick(OpenaiSelectors.BUTTON_DOWNLOAD, { navigation: false });
        // Return downloaded file
        return [await this.download_from_file(driver)];
    }
}
