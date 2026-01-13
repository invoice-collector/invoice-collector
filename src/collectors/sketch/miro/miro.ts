
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MiroCollector extends SketchCollector {

    static CONFIG = {
        id: "miro",
        name: "miro",
        description: "i18n.collectors.miro.description",
        version: "0",
        website: "https://miro.com/app/dashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/174865.jpg",
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
        loginUrl: "https://miro.com/app/dashboard/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MiroCollector.CONFIG);
    }
}
