
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MossCollector extends SketchCollector {

    static CONFIG = {
        id: "moss",
        name: "Moss",
        description: "i18n.collectors.moss.description",
        version: "0",
        website: "https://getmoss.com/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777335.jpg",
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
        loginUrl: "https://getmoss.com/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MossCollector.CONFIG);
    }
}
