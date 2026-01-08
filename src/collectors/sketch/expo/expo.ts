
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ExpoCollector extends SketchCollector {

    static CONFIG = {
        id: "expo",
        name: "Expo",
        description: "i18n.collectors.expo.description",
        version: "0",
        website: "https://expo.dev/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/955931.jpg",
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
        loginUrl: "https://expo.dev/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ExpoCollector.CONFIG);
    }
}
