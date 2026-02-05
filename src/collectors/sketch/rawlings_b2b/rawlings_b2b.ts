
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RawlingsB2bCollector extends SketchCollector {

    static CONFIG = {
        id: "rawlings_b2b",
        name: "Rawlings B2B",
        description: "i18n.collectors.rawlings_b2b.description",
        version: "0",
        website: "b2b.rawlings.com/orderhistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1212176.jpg",
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
        loginUrl: "b2b.rawlings.com/orderhistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RawlingsB2bCollector.CONFIG);
    }
}
