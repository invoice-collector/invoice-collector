
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonPlCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_pl",
        name: "Amazon (.pl)",
        description: "i18n.collectors.amazon_pl.description",
        version: "0",
        website: "https://www.amazon.pl/gp/css/order-history/ref=nav_youraccount_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1375105.jpg",
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
        entryUrl: "https://www.amazon.pl/gp/css/order-history/ref=nav_youraccount_orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonPlCollector.CONFIG);
    }
}
