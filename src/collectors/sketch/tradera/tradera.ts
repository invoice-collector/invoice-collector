
import { SketchCollector } from '../../sketchCollector';

export class TraderaCollector extends SketchCollector {

    static CONFIG = {
        id: "tradera",
        name: "Tradera",
        description: "i18n.collectors.tradera.description",
        version: "0",
        website: "https://www.tradera.com/my/Invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/59709.jpg",
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
        entryUrl: "https://www.tradera.com/my/Invoices",
    }

    constructor() {
        super(TraderaCollector.CONFIG);
    }
}
