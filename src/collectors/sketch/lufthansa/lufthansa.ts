
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LufthansaCollector extends SketchCollector {

    static CONFIG = {
        id: "lufthansa",
        name: "Lufthansa",
        description: "i18n.collectors.lufthansa.description",
        version: "0",
        website: "https://www.lufthansa.com/online/portal/lh/de/homepage?l=",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1188.jpg",
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
        loginUrl: "https://www.lufthansa.com/online/portal/lh/de/homepage?l=",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LufthansaCollector.CONFIG);
    }
}
