
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScreenconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "screenconnect",
        name: "Screenconnect",
        description: "i18n.collectors.screenconnect.description",
        version: "0",
        website: "https://cloud.screenconnect.com/#/account#1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414794.jpg",
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
        loginUrl: "https://cloud.screenconnect.com/#/account#1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ScreenconnectCollector.CONFIG);
    }
}
