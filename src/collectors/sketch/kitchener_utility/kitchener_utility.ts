
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KitchenerUtilityCollector extends SketchCollector {

    static CONFIG = {
        id: "kitchener_utility",
        name: "Kitchener Utility",
        description: "i18n.collectors.kitchener_utility.description",
        version: "0",
        website: "https://ebilling.kitchener.ca/sap/bc/ui5_ui5/sap/ZUMCUI5/index.html#page|%7B%22id%22%3A%22login%22%7D|0",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/23338.jpg",
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
        loginUrl: "https://ebilling.kitchener.ca/sap/bc/ui5_ui5/sap/ZUMCUI5/index.html#page|%7B%22id%22%3A%22login%22%7D|0",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KitchenerUtilityCollector.CONFIG);
    }
}
