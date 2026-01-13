
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UpworkCollector extends SketchCollector {

    static CONFIG = {
        id: "upwork",
        name: "Upwork",
        description: "i18n.collectors.upwork.description",
        version: "0",
        website: "https://www.upwork.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/428.jpg",
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
        loginUrl: "https://www.upwork.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UpworkCollector.CONFIG);
    }
}
