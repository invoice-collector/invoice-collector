
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AutopartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "autopartner",
        name: "Autopartner",
        description: "i18n.collectors.autopartner.description",
        version: "0",
        website: "https://apcat.eu/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2097990.jpg",
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
        loginUrl: "https://apcat.eu/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AutopartnerCollector.CONFIG);
    }
}
