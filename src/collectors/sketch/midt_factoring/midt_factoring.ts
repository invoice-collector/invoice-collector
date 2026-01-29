
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MidtFactoringCollector extends SketchCollector {

    static CONFIG = {
        id: "midt_factoring",
        name: "MIDT FACTORING",
        description: "i18n.collectors.midt_factoring.description",
        version: "0",
        website: "https://mfo.midtfactoring.dk/Login/Login.aspx?ReturnUrl=%2fHome%2fWelcome.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/940373.jpg",
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
        loginUrl: "https://mfo.midtfactoring.dk/Login/Login.aspx?ReturnUrl=%2fHome%2fWelcome.aspx",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MidtFactoringCollector.CONFIG);
    }
}
