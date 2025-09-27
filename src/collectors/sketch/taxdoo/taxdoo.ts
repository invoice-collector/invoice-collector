
import { SketchCollector } from '../../sketchCollector';

export class TaxdooCollector extends SketchCollector {

    static CONFIG = {
        id: "taxdoo",
        name: "Taxdoo",
        description: "i18n.collectors.taxdoo.description",
        version: "0",
        website: "https://dashboard.taxdoo.com/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40008.jpg",
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
        entryUrl: "https://dashboard.taxdoo.com/login.php",
    }

    constructor() {
        super(TaxdooCollector.CONFIG);
    }
}
