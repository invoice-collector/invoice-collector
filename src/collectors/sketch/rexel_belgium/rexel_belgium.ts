
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RexelBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "rexel_belgium",
        name: "REXEL BELGIUM",
        description: "i18n.collectors.rexel_belgium.description",
        version: "0",
        website: "https://ebpp.viaadvalvas.com/InvoiceManager/Dashboard.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226687.jpg",
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
        loginUrl: "https://ebpp.viaadvalvas.com/InvoiceManager/Dashboard.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RexelBelgiumCollector.CONFIG);
    }
}
