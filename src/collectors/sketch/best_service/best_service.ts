
import { SketchCollector } from '../../sketchCollector';

export class BestServiceCollector extends SketchCollector {

    static CONFIG = {
        id: "best_service",
        name: "Best Service",
        description: "i18n.collectors.best_service.description",
        version: "0",
        website: "https://account.bestservice.com/en/account/orders.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4545938.jpg",
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
        entryUrl: "https://account.bestservice.com/en/account/orders.html",
    }

    constructor() {
        super(BestServiceCollector.CONFIG);
    }
}
