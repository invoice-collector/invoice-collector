
import { SketchCollector } from '../../sketchCollector';

export class EbilanzOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "ebilanz_online",
        name: "eBilanz Online",
        description: "i18n.collectors.ebilanz_online.description",
        version: "0",
        website: "https://www.ebilanzonline.de/ebo/#:sections:user:transactions.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135854.jpg",
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
        entryUrl: "https://www.ebilanzonline.de/ebo/#:sections:user:transactions.html",
    }

    constructor() {
        super(EbilanzOnlineCollector.CONFIG);
    }
}
