
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DirectinvoicesCollector extends SketchCollector {

    static CONFIG = {
        id: "directinvoices",
        name: "directinvoices",
        description: "i18n.collectors.directinvoices.description",
        version: "0",
        website: "https://www.directinvoices.com/users/sign_up?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135361.jpg",
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
        loginUrl: "https://www.directinvoices.com/users/sign_up?",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DirectinvoicesCollector.CONFIG);
    }
}
