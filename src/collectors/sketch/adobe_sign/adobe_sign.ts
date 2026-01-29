
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdobeSignCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_sign",
        name: "Adobe Sign",
        description: "i18n.collectors.adobe_sign.description",
        version: "0",
        website: "https://secure.echosign.com/public/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/21642.jpg",
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
        loginUrl: "https://secure.echosign.com/public/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AdobeSignCollector.CONFIG);
    }
}
