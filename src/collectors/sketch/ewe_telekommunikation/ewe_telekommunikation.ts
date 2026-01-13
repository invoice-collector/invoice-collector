
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EweTelekommunikationCollector extends SketchCollector {

    static CONFIG = {
        id: "ewe_telekommunikation",
        name: "EWE Telekommunikation",
        description: "i18n.collectors.ewe_telekommunikation.description",
        version: "0",
        website: "https://mein.ewe.de/owl/secure/billingOverview.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9248.jpg",
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
        loginUrl: "https://mein.ewe.de/owl/secure/billingOverview.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EweTelekommunikationCollector.CONFIG);
    }
}
