
import { SketchCollector } from '../../sketchCollector';

export class StockaiCollector extends SketchCollector {

    static CONFIG = {
        id: "stockai",
        name: "StockAI",
        description: "i18n.collectors.stockai.description",
        version: "0",
        website: "https://www.stockai.com/profile/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1534213.jpg",
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
        entryUrl: "https://www.stockai.com/profile/invoices",
    }

    constructor() {
        super(StockaiCollector.CONFIG);
    }
}
