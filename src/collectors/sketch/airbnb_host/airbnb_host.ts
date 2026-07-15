import { CollectorCaptcha, CollectorState, CollectorType, CollectorAuthenticationMethod } from '../../abstractCollector';
import { Driver } from '../../../driver/driver';
import { SketchCollector } from '../../sketchCollector';

export class AirbnbHostCollector extends SketchCollector {

    static CONFIG = {
        id: "airbnb_host",
        name: "i18n.collectors.airbnb_host.name",
        description: "i18n.collectors.airbnb_host.description",
        version: "0",
        website: "https://www.airbnb.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
        type: CollectorType.SKETCH,
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        loginUrl: "https://www.airbnb.com/login?redirect_url=%2Fusers%2Ftransaction_history",
        entryUrl: "https://www.airbnb.com/users/transaction_history",
        captcha: CollectorCaptcha.NONE,
        authenticationMethod: CollectorAuthenticationMethod.ALL,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AirbnbHostCollector.CONFIG);
    }
    
    async needLogin(driver: Driver): Promise<boolean> {
        return this.config.entryUrl == undefined || driver.url().includes("/login");
    }
}
