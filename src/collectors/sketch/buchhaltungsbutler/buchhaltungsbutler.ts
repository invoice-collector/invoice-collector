
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BuchhaltungsbutlerCollector extends SketchCollector {

    static CONFIG = {
        id: "buchhaltungsbutler",
        name: "Buchhaltungsbutler",
        description: "i18n.collectors.buchhaltungsbutler.description",
        version: "0",
        website: "https://webapp.buchhaltungsbutler.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7905.jpg",
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
        loginUrl: "https://webapp.buchhaltungsbutler.de/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BuchhaltungsbutlerCollector.CONFIG);
    }
}
