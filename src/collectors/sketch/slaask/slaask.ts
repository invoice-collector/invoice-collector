
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SlaaskCollector extends SketchCollector {

    static CONFIG = {
        id: "slaask",
        name: "Slaask",
        description: "i18n.collectors.slaask.description",
        version: "0",
        website: "https://simplessusteam.slack.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/94407.jpg",
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
        loginUrl: "https://simplessusteam.slack.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SlaaskCollector.CONFIG);
    }
}
