
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SocialpilotCollector extends SketchCollector {

    static CONFIG = {
        id: "socialpilot",
        name: "SocialPilot",
        description: "i18n.collectors.socialpilot.description",
        version: "0",
        website: "https://panel.socialpilot.co/membership/bill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29597.jpg",
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
        loginUrl: "https://panel.socialpilot.co/membership/bill",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SocialpilotCollector.CONFIG);
    }
}
