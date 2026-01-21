
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';
import { Driver } from '../../../driver/driver';

export class AirbnbCollector extends SketchCollector {

    static CONFIG = {
        id: "airbnb",
        name: "Airbnb",
        description: "i18n.collectors.airbnb.description",
        version: "1",
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
        loginUrl: "https://www.airbnb.com/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AirbnbCollector.CONFIG);
    }

    async needLogin(driver: Driver): Promise<boolean> {
        return this.config.entryUrl == undefined || !driver.url().includes("/login");
    }
}
