
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AnimotoCollector extends SketchCollector {

    static CONFIG = {
        id: "animoto",
        name: "Animoto",
        description: "i18n.collectors.animoto.description",
        version: "0",
        website: "https://animoto.com/log_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/313.jpg",
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
        loginUrl: "https://animoto.com/log_in",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AnimotoCollector.CONFIG);
    }
}
