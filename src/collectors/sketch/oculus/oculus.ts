
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OculusCollector extends SketchCollector {

    static CONFIG = {
        id: "oculus",
        name: "Oculus",
        description: "i18n.collectors.oculus.description",
        version: "0",
        website: "https://auth.oculus.com/login/?redirect_uri=https%3A%2F%2Fwww.oculus.com%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9771.jpg",
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
        loginUrl: "https://auth.oculus.com/login/?redirect_uri=https%3A%2F%2Fwww.oculus.com%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(OculusCollector.CONFIG);
    }
}
