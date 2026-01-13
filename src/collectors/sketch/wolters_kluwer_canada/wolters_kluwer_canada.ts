
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WoltersKluwerCanadaCollector extends SketchCollector {

    static CONFIG = {
        id: "wolters_kluwer_canada",
        name: "Wolters Kluwer - Canada",
        description: "i18n.collectors.wolters_kluwer_canada.description",
        version: "0",
        website: "https://shop.wolterskluwer.ca/en/customer/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74300.jpg",
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
        loginUrl: "https://shop.wolterskluwer.ca/en/customer/account/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoltersKluwerCanadaCollector.CONFIG);
    }
}
