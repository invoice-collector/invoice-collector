
import { SketchCollector } from '../../sketchCollector';

export class MiraklBigbangCollector extends SketchCollector {

    static CONFIG = {
        id: "mirakl_bigbang",
        name: "Mirakl BigBang",
        description: "i18n.collectors.mirakl_bigbang.description",
        version: "0",
        website: "https://bigbangmarketplace.mirakl.net/sellerpayment/shop/shop-billing-cycles?sort=dateCreated%2CDESC&limit=25",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2254956.jpg",
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
        entryUrl: "https://bigbangmarketplace.mirakl.net/sellerpayment/shop/shop-billing-cycles?sort=dateCreated%2CDESC&limit=25",
    }

    constructor() {
        super(MiraklBigbangCollector.CONFIG);
    }
}
