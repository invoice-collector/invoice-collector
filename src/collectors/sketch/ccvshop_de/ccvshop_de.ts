
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CcvshopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ccvshop_de",
        name: "ccvshop.de",
        description: "i18n.collectors.ccvshop_de.description",
        version: "0",
        website: "https://login.ccvshop.de/onderhoud/GenericLogin.php?Language=de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20480.jpg",
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
        loginUrl: "https://login.ccvshop.de/onderhoud/GenericLogin.php?Language=de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CcvshopDeCollector.CONFIG);
    }
}
