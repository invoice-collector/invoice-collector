
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EGonCollector extends SketchCollector {

    static CONFIG = {
        id: "e_gon",
        name: "e.gon",
        description: "i18n.collectors.e_gon.description",
        version: "0",
        website: "https://energiegemeinschaften.ezn.at/backend/e/invoice/list/user",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985688.jpg",
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
        loginUrl: "https://energiegemeinschaften.ezn.at/backend/e/invoice/list/user",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EGonCollector.CONFIG);
    }
}
