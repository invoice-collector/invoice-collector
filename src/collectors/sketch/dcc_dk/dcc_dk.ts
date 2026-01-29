
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DccDkCollector extends SketchCollector {

    static CONFIG = {
        id: "dcc_dk",
        name: "DCC.DK",
        description: "i18n.collectors.dcc_dk.description",
        version: "0",
        website: "https://en.dcc.dk/customercenter/credit-note",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779719.jpg",
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
        loginUrl: "https://en.dcc.dk/customercenter/credit-note",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DccDkCollector.CONFIG);
    }
}
