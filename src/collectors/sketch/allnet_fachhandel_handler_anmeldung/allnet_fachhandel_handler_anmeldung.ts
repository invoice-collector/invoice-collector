
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AllnetFachhandelHandlerAnmeldungCollector extends SketchCollector {

    static CONFIG = {
        id: "allnet_fachhandel_handler_anmeldung",
        name: "ALLNET Fachhandel Handler-Anmeldung",
        description: "i18n.collectors.allnet_fachhandel_handler_anmeldung.description",
        version: "0",
        website: "https://shop.allnet.de/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115311.jpg",
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
        loginUrl: "https://shop.allnet.de/account/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AllnetFachhandelHandlerAnmeldungCollector.CONFIG);
    }
}
