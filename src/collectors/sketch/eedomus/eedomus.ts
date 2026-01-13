
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EedomusCollector extends SketchCollector {

    static CONFIG = {
        id: "eedomus",
        name: "Eedomus",
        description: "i18n.collectors.eedomus.description",
        version: "0",
        website: "https://www.eedomus.com/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118709.jpg",
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
        loginUrl: "https://www.eedomus.com/en/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EedomusCollector.CONFIG);
    }
}
