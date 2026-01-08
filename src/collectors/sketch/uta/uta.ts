
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UtaCollector extends SketchCollector {

    static CONFIG = {
        id: "uta",
        name: "UTA",
        description: "i18n.collectors.uta.description",
        version: "0",
        website: "https://www.uta.com/servicecenter/prod/spr/login-flow?execution=e1s1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47755.jpg",
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
        loginUrl: "https://www.uta.com/servicecenter/prod/spr/login-flow?execution=e1s1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UtaCollector.CONFIG);
    }
}
