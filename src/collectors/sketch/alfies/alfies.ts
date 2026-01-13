
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlfiesCollector extends SketchCollector {

    static CONFIG = {
        id: "alfies",
        name: "Alfies",
        description: "i18n.collectors.alfies.description",
        version: "0",
        website: "http://www.alfies.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/131662.jpg",
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
        loginUrl: "http://www.alfies.at",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlfiesCollector.CONFIG);
    }
}
