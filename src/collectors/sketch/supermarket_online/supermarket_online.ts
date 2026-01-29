
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SupermarketOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "supermarket_online",
        name: "SUPERMARKET Online",
        description: "i18n.collectors.supermarket_online.description",
        version: "0",
        website: "https://internetowysupermarket.pl/client-orders.php?display=closed",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200132.jpg",
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
        loginUrl: "https://internetowysupermarket.pl/client-orders.php?display=closed",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(SupermarketOnlineCollector.CONFIG);
    }
}
