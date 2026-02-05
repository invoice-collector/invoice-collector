
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HeimatguthabenCollector extends SketchCollector {

    static CONFIG = {
        id: "heimatguthaben",
        name: "Heimatguthaben",
        description: "i18n.collectors.heimatguthaben.description",
        version: "0",
        website: "https://www.heimatguthaben.de/signIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090217.jpg",
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
        loginUrl: "https://www.heimatguthaben.de/signIn",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HeimatguthabenCollector.CONFIG);
    }
}
