import { WebCollector } from '../../../../collectors/web2Collector';
import { OrangeCommonSelectors } from './selectors';
import { Driver, } from '../../../../driver/driver';
import { WebSocketServer } from '../../../../websocket/webSocketServer';

export abstract class OrangeCommonCollector extends WebCollector {

    async needLogin(driver: Driver): Promise<boolean> {
        return driver.url().includes("login.orange");
    }

    async login(driver: Driver, params: any, webSocketServer: WebSocketServer | undefined): Promise<string | void> {
        // Refuse cookies
        await driver.leftClick(OrangeCommonSelectors.BUTTON_REFUSE_COOKIES, { raiseException: false, timeout: 5000});

        // If login input is displayed
        const emailInput = await driver.getElement(OrangeCommonSelectors.FIELD_EMAIL, { raiseException: false, timeout: 2000 });
        if (emailInput) {
            // Input email
            await emailInput.inputText(params.id);
            await driver.leftClick(OrangeCommonSelectors.BUTTON_CONTINUE);
        
            // Check if email is incorrect
            const email_alert = await driver.getElement(OrangeCommonSelectors.CONTAINER_LOGIN_ALERT, { raiseException: false, timeout: 2000 });
            if (email_alert) {
                return await email_alert.textContent("i18n.collectors.all.email_or_number.error");
            }

            // If id exists but no account associated
            if (driver.url().includes("mdp/choice/default") || driver.url().includes("promo/custom-login")) {
                return "i18n.collectors.all.signup.error";
            }
        }

        // Select password authentication if multiple options are available
        await driver.leftClick(OrangeCommonSelectors.BUTTON_PASSWORD_OPTION, { raiseException: false, timeout: 2000 });

        // Input password
        await driver.inputText(OrangeCommonSelectors.FIELD_PASSWORD, params.password);
        await driver.leftClick(OrangeCommonSelectors.BUTTON_SUBMIT);
    
        // Check if password is incorrect
        const password_alert = await driver.getElement(OrangeCommonSelectors.CONTAINER_PASSWORD_ALERT, { raiseException: false, timeout: 2000 });
        if (password_alert) {
            return await password_alert.textContent("i18n.collectors.all.password.error");
        }

        // Skip 2FA proposal if displayed
        await driver.leftClick(OrangeCommonSelectors.BUTTON_SKIP_2FA, { raiseException: false, timeout: 2000 });
    }
}
