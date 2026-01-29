
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnipeitCollector extends SketchCollector {

    static CONFIG = {
        id: "snipeit",
        name: "snipeit",
        description: "i18n.collectors.snipeit.description",
        version: "0",
        website: "https://snipeitapp.com/account/invoices/in_1Eb3TLLn2xhxKhITMn4NrvC7/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134680.jpg",
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
        loginUrl: "https://snipeitapp.com/account/invoices/in_1Eb3TLLn2xhxKhITMn4NrvC7/download",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SnipeitCollector.CONFIG);
    }
}
