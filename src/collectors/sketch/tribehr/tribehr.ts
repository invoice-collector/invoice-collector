
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TribehrCollector extends SketchCollector {

    static CONFIG = {
        id: "tribehr",
        name: "TribeHR",
        description: "i18n.collectors.tribehr.description",
        version: "0",
        website: "https://www.mytribehr.com/users/login/find",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8601.jpg",
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
        loginUrl: "https://www.mytribehr.com/users/login/find",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TribehrCollector.CONFIG);
    }
}
