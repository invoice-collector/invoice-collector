
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DistillIoCollector extends SketchCollector {

    static CONFIG = {
        id: "distill_io",
        name: "distill.io",
        description: "i18n.collectors.distill_io.description",
        version: "0",
        website: "https://app.distill.io/settings/billing#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/759044.jpg",
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
        loginUrl: "https://app.distill.io/settings/billing#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DistillIoCollector.CONFIG);
    }
}
