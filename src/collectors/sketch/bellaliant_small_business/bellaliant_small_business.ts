
import { SketchCollector } from '../../sketchCollector';

export class BellaliantSmallBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "bellaliant_small_business",
        name: "BellAliant Small Business",
        description: "i18n.collectors.bellaliant_small_business.description",
        version: "0",
        website: "https://productsandservice.bellaliant.ca/BillPresenter/BusinessBill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396882.jpg",
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
        entryUrl: "https://productsandservice.bellaliant.ca/BillPresenter/BusinessBill",
    }

    constructor() {
        super(BellaliantSmallBusinessCollector.CONFIG);
    }
}
