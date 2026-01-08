
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RecaShopDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "reca_shop_deutschland",
        name: "RECA Shop Deutschland",
        description: "i18n.collectors.reca_shop_deutschland.description",
        version: "0",
        website: "https://shop.recanorm.de/de/DE/EUR/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200632.jpg",
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
        loginUrl: "https://shop.recanorm.de/de/DE/EUR/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(RecaShopDeutschlandCollector.CONFIG);
    }
}
