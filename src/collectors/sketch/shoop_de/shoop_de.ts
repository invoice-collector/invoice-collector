
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ShoopDeCollector extends SketchCollector {

    static CONFIG = {
        id: "shoop_de",
        name: "shoop.de",
        description: "i18n.collectors.shoop_de.description",
        version: "0",
        website: "http://www.shoop.de/meinkonto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64995.jpg",
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
        loginUrl: "http://www.shoop.de/meinkonto",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ShoopDeCollector.CONFIG);
    }
}
