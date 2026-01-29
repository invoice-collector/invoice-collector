
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PrCoCollector extends SketchCollector {

    static CONFIG = {
        id: "pr_co",
        name: "PR.co",
        description: "i18n.collectors.pr_co.description",
        version: "0",
        website: "https://app.pr.co/users/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6826.jpg",
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
        loginUrl: "https://app.pr.co/users/sign_in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PrCoCollector.CONFIG);
    }
}
