
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SkypeManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "skype_manager",
        name: "Skype Manager",
        description: "i18n.collectors.skype_manager.description",
        version: "0",
        website: "https://manager.skype.com/reports/purchases/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/156541.jpg",
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
        loginUrl: "https://manager.skype.com/reports/purchases/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SkypeManagerCollector.CONFIG);
    }
}
