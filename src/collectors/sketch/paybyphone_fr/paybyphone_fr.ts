
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PaybyphoneFrCollector extends SketchCollector {

    static CONFIG = {
        id: "paybyphone_fr",
        name: "PayByPhone (.fr)",
        description: "i18n.collectors.paybyphone_fr.description",
        version: "0",
        website: "https://m2.paybyphone.fr/parking",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/573602.jpg",
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
        loginUrl: "https://m2.paybyphone.fr/parking",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PaybyphoneFrCollector.CONFIG);
    }
}
