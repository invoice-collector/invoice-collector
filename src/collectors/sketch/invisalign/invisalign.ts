
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class InvisalignCollector extends SketchCollector {

    static CONFIG = {
        id: "invisalign",
        name: "Invisalign",
        description: "i18n.collectors.invisalign.description",
        version: "0",
        website: "https://partners-payments.invisalign.com/partners/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/403620.jpg",
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
        loginUrl: "https://partners-payments.invisalign.com/partners/sign_in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(InvisalignCollector.CONFIG);
    }
}
