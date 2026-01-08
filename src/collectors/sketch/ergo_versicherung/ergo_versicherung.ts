
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ErgoVersicherungCollector extends SketchCollector {

    static CONFIG = {
        id: "ergo_versicherung",
        name: "Ergo Versicherung",
        description: "i18n.collectors.ergo_versicherung.description",
        version: "0",
        website: "https://kunde-s.ergo.de/meineversicherungen/L1/Postfach/Posteingang%20(Spa).aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/565854.jpg",
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
        loginUrl: "https://kunde-s.ergo.de/meineversicherungen/L1/Postfach/Posteingang%20(Spa).aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ErgoVersicherungCollector.CONFIG);
    }
}
