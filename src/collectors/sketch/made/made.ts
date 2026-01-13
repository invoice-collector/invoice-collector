
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MadeCollector extends SketchCollector {

    static CONFIG = {
        id: "made",
        name: "MADE",
        description: "i18n.collectors.made.description",
        version: "0",
        website: "https://www.made.com/customer/account/login/referer/aHR0cHM6Ly93d3cubWFkZS5jb20vY3VzdG9tZXIvYWNjb3VudC9pbmRleC8,/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15177.jpg",
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
        loginUrl: "https://www.made.com/customer/account/login/referer/aHR0cHM6Ly93d3cubWFkZS5jb20vY3VzdG9tZXIvYWNjb3VudC9pbmRleC8,/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MadeCollector.CONFIG);
    }
}
