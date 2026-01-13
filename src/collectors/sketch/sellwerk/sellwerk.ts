
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SellwerkCollector extends SketchCollector {

    static CONFIG = {
        id: "sellwerk",
        name: "SELLWERK",
        description: "i18n.collectors.sellwerk.description",
        version: "0",
        website: "http://www.sellwerk.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78334.jpg",
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
        loginUrl: "http://www.sellwerk.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SellwerkCollector.CONFIG);
    }
}
