
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BerecycledCollector extends SketchCollector {

    static CONFIG = {
        id: "berecycled",
        name: "Berecycled",
        description: "i18n.collectors.berecycled.description",
        version: "0",
        website: "https://berecycled.org/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119144.jpg",
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
        loginUrl: "https://berecycled.org/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BerecycledCollector.CONFIG);
    }
}
