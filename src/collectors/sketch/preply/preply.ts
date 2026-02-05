
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PreplyCollector extends SketchCollector {

    static CONFIG = {
        id: "preply",
        name: "Preply",
        description: "i18n.collectors.preply.description",
        version: "0",
        website: "https://preply.de/de/settings/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/226577.jpg",
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
        loginUrl: "https://preply.de/de/settings/history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PreplyCollector.CONFIG);
    }
}
