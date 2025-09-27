
import { SketchCollector } from '../../sketchCollector';

export class BolComSellercentralCollector extends SketchCollector {

    static CONFIG = {
        id: "bol_com_sellercentral",
        name: "bol.com - SellerCentral",
        description: "i18n.collectors.bol_com_sellercentral.description",
        version: "0",
        website: "https://www.bol.com/sdd/cashboard/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119986.jpg",
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
        entryUrl: "https://www.bol.com/sdd/cashboard/",
    }

    constructor() {
        super(BolComSellercentralCollector.CONFIG);
    }
}
