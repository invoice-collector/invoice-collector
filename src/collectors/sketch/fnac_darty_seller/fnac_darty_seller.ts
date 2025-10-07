
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FnacDartySellerCollector extends SketchCollector {

    static CONFIG = {
        id: "fnac_darty_seller",
        name: "Fnac Darty Seller",
        description: "i18n.collectors.fnac_darty_seller.description",
        version: "0",
        website: "https://seller.fnacdarty.com/compte/vendeur/factures/date_desc/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178808.jpg",
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
        entryUrl: "https://seller.fnacdarty.com/compte/vendeur/factures/date_desc/1",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FnacDartySellerCollector.CONFIG);
    }
}
