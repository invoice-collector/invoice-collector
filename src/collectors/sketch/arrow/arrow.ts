
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ArrowCollector extends SketchCollector {

    static CONFIG = {
        id: "arrow",
        name: "ARROW",
        description: "i18n.collectors.arrow.description",
        version: "0",
        website: "https://my.arrowecs.fr/partner-portal/invoices.do",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/883271.jpg",
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
        loginUrl: "https://my.arrowecs.fr/partner-portal/invoices.do",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ArrowCollector.CONFIG);
    }
}
