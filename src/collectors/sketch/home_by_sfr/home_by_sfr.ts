
import { SketchCollector } from '../../sketchCollector';

export class HomeBySfrCollector extends SketchCollector {

    static CONFIG = {
        id: "home_by_sfr",
        name: "Home by SFR",
        description: "i18n.collectors.home_by_sfr.description",
        version: "0",
        website: "https://boutique.home.sfr.fr/pdf-invoice.php?id_invoice=1684553",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/138777.jpg",
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
        entryUrl: "https://boutique.home.sfr.fr/pdf-invoice.php?id_invoice=1684553",
    }

    constructor() {
        super(HomeBySfrCollector.CONFIG);
    }
}
