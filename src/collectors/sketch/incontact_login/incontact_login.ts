
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IncontactLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "incontact_login",
        name: "InContact Login",
        description: "i18n.collectors.incontact_login.description",
        version: "0",
        website: "https://support.niceincontact.com/OnlineBill/Invoice/Overview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/112167.jpg",
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
        loginUrl: "https://support.niceincontact.com/OnlineBill/Invoice/Overview",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IncontactLoginCollector.CONFIG);
    }
}
