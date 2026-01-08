
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FressnapfCollector extends SketchCollector {

    static CONFIG = {
        id: "fressnapf",
        name: "Fressnapf",
        description: "i18n.collectors.fressnapf.description",
        version: "0",
        website: "https://www.fressnapf.de/login/?redirectTo=%2Fmy-account%2F%3F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11189.jpg",
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
        loginUrl: "https://www.fressnapf.de/login/?redirectTo=%2Fmy-account%2F%3F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FressnapfCollector.CONFIG);
    }
}
