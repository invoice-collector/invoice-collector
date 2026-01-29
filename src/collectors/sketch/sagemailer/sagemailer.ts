
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SagemailerCollector extends SketchCollector {

    static CONFIG = {
        id: "sagemailer",
        name: "SageMailer",
        description: "i18n.collectors.sagemailer.description",
        version: "0",
        website: "http://www.sagemailer.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/109382.jpg",
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
        loginUrl: "http://www.sagemailer.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SagemailerCollector.CONFIG);
    }
}
