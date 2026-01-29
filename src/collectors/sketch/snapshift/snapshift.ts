
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SnapshiftCollector extends SketchCollector {

    static CONFIG = {
        id: "snapshift",
        name: "SnapShift",
        description: "i18n.collectors.snapshift.description",
        version: "0",
        website: "https://app.snapshift.co/subscription?tab=payment_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/672340.jpg",
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
        loginUrl: "https://app.snapshift.co/subscription?tab=payment_history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SnapshiftCollector.CONFIG);
    }
}
