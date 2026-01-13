
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AlapageComCollector extends SketchCollector {

    static CONFIG = {
        id: "alapage_com",
        name: "Alapage.com",
        description: "i18n.collectors.alapage_com.description",
        version: "0",
        website: "https://fr.shopping.rakuten.com/connect?action=login&c=80",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/116127.jpg",
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
        loginUrl: "https://fr.shopping.rakuten.com/connect?action=login&c=80",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlapageComCollector.CONFIG);
    }
}
