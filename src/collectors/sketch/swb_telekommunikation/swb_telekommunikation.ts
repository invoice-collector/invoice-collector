
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SwbTelekommunikationCollector extends SketchCollector {

    static CONFIG = {
        id: "swb_telekommunikation",
        name: "swb Telekommunikation",
        description: "i18n.collectors.swb_telekommunikation.description",
        version: "0",
        website: "https://mein.swb-gruppe.de/nordcomcss/secure/billingOverview.xhtml",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618865.jpg",
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
        loginUrl: "https://mein.swb-gruppe.de/nordcomcss/secure/billingOverview.xhtml",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SwbTelekommunikationCollector.CONFIG);
    }
}
