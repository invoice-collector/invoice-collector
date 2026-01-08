
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SpiegelOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "spiegel_online",
        name: "SPIEGEL ONLINE",
        description: "i18n.collectors.spiegel_online.description",
        version: "0",
        website: "https://www.spiegel.de/plus/access/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74288.jpg",
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
        loginUrl: "https://www.spiegel.de/plus/access/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpiegelOnlineCollector.CONFIG);
    }
}
