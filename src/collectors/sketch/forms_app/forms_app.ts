
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FormsAppCollector extends SketchCollector {

    static CONFIG = {
        id: "forms_app",
        name: "forms.app",
        description: "i18n.collectors.forms_app.description",
        version: "0",
        website: "https://forms.app/account/paymenthistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2008313.jpg",
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
        loginUrl: "https://forms.app/account/paymenthistory",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FormsAppCollector.CONFIG);
    }
}
