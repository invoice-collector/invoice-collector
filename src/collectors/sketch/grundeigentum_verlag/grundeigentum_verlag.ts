
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GrundeigentumVerlagCollector extends SketchCollector {

    static CONFIG = {
        id: "grundeigentum_verlag",
        name: "Grundeigentum-Verlag",
        description: "i18n.collectors.grundeigentum_verlag.description",
        version: "0",
        website: "https://premium.grundeigentum-verlag.de/zugang/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/26543.jpg",
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
        loginUrl: "https://premium.grundeigentum-verlag.de/zugang/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrundeigentumVerlagCollector.CONFIG);
    }
}
