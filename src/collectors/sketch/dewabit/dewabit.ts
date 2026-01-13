
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DewabitCollector extends SketchCollector {

    static CONFIG = {
        id: "dewabit",
        name: "dewabit",
        description: "i18n.collectors.dewabit.description",
        version: "0",
        website: "https://member.dewabit.com/dash/subscription?status=success&action=create",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115308.jpg",
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
        loginUrl: "https://member.dewabit.com/dash/subscription?status=success&action=create",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DewabitCollector.CONFIG);
    }
}
