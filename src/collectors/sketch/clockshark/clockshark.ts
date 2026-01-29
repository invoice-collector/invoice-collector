
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ClocksharkCollector extends SketchCollector {

    static CONFIG = {
        id: "clockshark",
        name: "clockshark",
        description: "i18n.collectors.clockshark.description",
        version: "0",
        website: "https://app.clockshark.com/App/Plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1329436.jpg",
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
        loginUrl: "https://app.clockshark.com/App/Plan",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ClocksharkCollector.CONFIG);
    }
}
