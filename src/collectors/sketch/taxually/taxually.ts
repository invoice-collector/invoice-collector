
import { SketchCollector } from '../../sketchCollector';

export class TaxuallyCollector extends SketchCollector {

    static CONFIG = {
        id: "taxually",
        name: "Taxually",
        description: "i18n.collectors.taxually.description",
        version: "0",
        website: "https://app.taxually.com/app/transaction-history/active",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3111155.jpg",
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
        entryUrl: "https://app.taxually.com/app/transaction-history/active",
    }

    constructor() {
        super(TaxuallyCollector.CONFIG);
    }
}
