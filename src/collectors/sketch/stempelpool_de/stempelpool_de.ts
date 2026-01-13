
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class StempelpoolDeCollector extends SketchCollector {

    static CONFIG = {
        id: "stempelpool_de",
        name: "stempelpool.de",
        description: "i18n.collectors.stempelpool_de.description",
        version: "0",
        website: "https://www.stempelpool.de/login2.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18673.jpg",
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
        loginUrl: "https://www.stempelpool.de/login2.php",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StempelpoolDeCollector.CONFIG);
    }
}
