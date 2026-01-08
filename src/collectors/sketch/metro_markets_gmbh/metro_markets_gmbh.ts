
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MetroMarketsGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "metro_markets_gmbh",
        name: "Metro Markets GmbH",
        description: "i18n.collectors.metro_markets_gmbh.description",
        version: "0",
        website: "https://www.metro.de/marktplatz/account/orders-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3103748.jpg",
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
        loginUrl: "https://www.metro.de/marktplatz/account/orders-history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetroMarketsGmbhCollector.CONFIG);
    }
}
