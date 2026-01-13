
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FondsdepotbankCollector extends SketchCollector {

    static CONFIG = {
        id: "fondsdepotbank",
        name: "Fondsdepotbank",
        description: "i18n.collectors.fondsdepotbank.description",
        version: "0",
        website: "https://finanzportal.fondsdepotbank.de/fdb/abaxx-?$part=Home.content.Welcome.Dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/433439.jpg",
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
        loginUrl: "https://finanzportal.fondsdepotbank.de/fdb/abaxx-?$part=Home.content.Welcome.Dashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FondsdepotbankCollector.CONFIG);
    }
}
