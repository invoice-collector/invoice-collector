
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WerbetechnikerShopCollector extends SketchCollector {

    static CONFIG = {
        id: "werbetechniker_shop",
        name: "Werbetechniker Shop",
        description: "i18n.collectors.werbetechniker_shop.description",
        version: "0",
        website: "https://www.werbetechniker-shop.de/index.php?cl=account_order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/753046.jpg",
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
        loginUrl: "https://www.werbetechniker-shop.de/index.php?cl=account_order",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(WerbetechnikerShopCollector.CONFIG);
    }
}
