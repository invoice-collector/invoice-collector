
import { SketchCollector } from '../../sketchCollector';

export class PropelleradsCollector extends SketchCollector {

    static CONFIG = {
        id: "propellerads",
        name: "PropellerAds",
        description: "i18n.collectors.propellerads.description",
        version: "0",
        website: "https://partners.propellerads.com/#/app/finance/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102637.jpg",
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
        entryUrl: "https://partners.propellerads.com/#/app/finance/invoices",
    }

    constructor() {
        super(PropelleradsCollector.CONFIG);
    }
}
