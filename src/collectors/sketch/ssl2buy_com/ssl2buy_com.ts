
import { SketchCollector } from '../../sketchCollector';

export class Ssl2buyComCollector extends SketchCollector {

    static CONFIG = {
        id: "ssl2buy_com",
        name: "SSL2BUY.com",
        description: "i18n.collectors.ssl2buy_com.description",
        version: "0",
        website: "https://store.ssl2buy.com/invoice/viewinvoice/all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/929.jpg",
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
        entryUrl: "https://store.ssl2buy.com/invoice/viewinvoice/all",
    }

    constructor() {
        super(Ssl2buyComCollector.CONFIG);
    }
}
