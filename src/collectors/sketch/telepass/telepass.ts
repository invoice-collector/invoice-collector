
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelepassCollector extends SketchCollector {

    static CONFIG = {
        id: "telepass",
        name: "Telepass",
        description: "i18n.collectors.telepass.description",
        version: "0",
        website: "https://www.telepass.com/KTI/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/804772.jpg",
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
        loginUrl: "https://www.telepass.com/KTI/login",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelepassCollector.CONFIG);
    }
}
