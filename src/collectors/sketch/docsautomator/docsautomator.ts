
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DocsautomatorCollector extends SketchCollector {

    static CONFIG = {
        id: "docsautomator",
        name: "DocsAutomator",
        description: "i18n.collectors.docsautomator.description",
        version: "0",
        website: "https://billing.stripe.com/p/login/14kdSXcohdlweNafYY?prefilled_email=info@netzeroacademy.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732656.jpg",
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
        loginUrl: "https://billing.stripe.com/p/login/14kdSXcohdlweNafYY?prefilled_email=info@netzeroacademy.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DocsautomatorCollector.CONFIG);
    }
}
