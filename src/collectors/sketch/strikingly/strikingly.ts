
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StrikinglyCollector extends SketchCollector {

    static CONFIG = {
        id: "strikingly",
        name: "Strikingly",
        description: "i18n.collectors.strikingly.description",
        version: "0",
        website: "https://www.strikingly.com/s/charges",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778140.jpg",
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
        loginUrl: "https://www.strikingly.com/s/charges",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(StrikinglyCollector.CONFIG);
    }
}
