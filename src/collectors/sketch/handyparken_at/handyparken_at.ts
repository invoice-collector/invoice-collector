
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HandyparkenAtCollector extends SketchCollector {

    static CONFIG = {
        id: "handyparken_at",
        name: "Handyparken.at",
        description: "i18n.collectors.handyparken_at.description",
        version: "0",
        website: "https://www.handyparken.at/mopa3/index.sp#/my-transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778197.jpg",
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
        loginUrl: "https://www.handyparken.at/mopa3/index.sp#/my-transactions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HandyparkenAtCollector.CONFIG);
    }
}
