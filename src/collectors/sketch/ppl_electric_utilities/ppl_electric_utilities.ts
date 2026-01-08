
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PplElectricUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "ppl_electric_utilities",
        name: "PPL Electric Utilities",
        description: "i18n.collectors.ppl_electric_utilities.description",
        version: "0",
        website: "https://www.pplelectric.com/my-account/login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9612.jpg",
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
        loginUrl: "https://www.pplelectric.com/my-account/login.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PplElectricUtilitiesCollector.CONFIG);
    }
}
