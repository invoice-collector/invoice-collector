
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EvdEntsorgungsverbundDusseldorfCollector extends SketchCollector {

    static CONFIG = {
        id: "evd_entsorgungsverbund_dusseldorf",
        name: "EVD (Entsorgungsverbund Dusseldorf)",
        description: "i18n.collectors.evd_entsorgungsverbund_dusseldorf.description",
        version: "0",
        website: "https://kundenportal-evd.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899952.jpg",
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
        loginUrl: "https://kundenportal-evd.de/documents",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(EvdEntsorgungsverbundDusseldorfCollector.CONFIG);
    }
}
