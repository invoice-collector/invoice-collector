
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AyYildizMobilesInternetCollector extends SketchCollector {

    static CONFIG = {
        id: "ay_yildiz_mobiles_internet",
        name: "Ay Yildiz Mobiles Internet",
        description: "i18n.collectors.ay_yildiz_mobiles_internet.description",
        version: "0",
        website: "https://mein.ayyildiz.de/de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9018.jpg",
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
        loginUrl: "https://mein.ayyildiz.de/de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AyYildizMobilesInternetCollector.CONFIG);
    }
}
