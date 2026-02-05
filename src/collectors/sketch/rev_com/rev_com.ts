
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RevComCollector extends SketchCollector {

    static CONFIG = {
        id: "rev_com",
        name: "Rev.com",
        description: "i18n.collectors.rev_com.description",
        version: "0",
        website: "https://www.rev.com/account/orders/orderhistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72445.jpg",
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
        loginUrl: "https://www.rev.com/account/orders/orderhistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RevComCollector.CONFIG);
    }
}
