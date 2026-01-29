
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UxpressiaCollector extends SketchCollector {

    static CONFIG = {
        id: "uxpressia",
        name: "UXpressia",
        description: "i18n.collectors.uxpressia.description",
        version: "0",
        website: "https://uxpressia.com/workspace/AXzjR/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/236272.jpg",
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
        loginUrl: "https://uxpressia.com/workspace/AXzjR/invoices",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UxpressiaCollector.CONFIG);
    }
}
