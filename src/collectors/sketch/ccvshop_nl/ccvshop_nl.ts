
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CcvshopNlCollector extends SketchCollector {

    static CONFIG = {
        id: "ccvshop_nl",
        name: "ccvshop.nl",
        description: "i18n.collectors.ccvshop_nl.description",
        version: "0",
        website: "https://login.ccvshop.nl/onderhoud/GenericLogin.php?Language=nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20479.jpg",
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
        loginUrl: "https://login.ccvshop.nl/onderhoud/GenericLogin.php?Language=nl",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CcvshopNlCollector.CONFIG);
    }
}
