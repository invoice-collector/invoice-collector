
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IfmCollector extends SketchCollector {

    static CONFIG = {
        id: "ifm",
        name: "IFM",
        description: "i18n.collectors.ifm.description",
        version: "0",
        website: "https://www.ifm.com/de/de/secure/my-account#!/invoiceList",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/136800.jpg",
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
        loginUrl: "https://www.ifm.com/de/de/secure/my-account#!/invoiceList",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IfmCollector.CONFIG);
    }
}
