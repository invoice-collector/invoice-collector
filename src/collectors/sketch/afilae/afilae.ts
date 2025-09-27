
import { SketchCollector } from '../../sketchCollector';

export class AfilaeCollector extends SketchCollector {

    static CONFIG = {
        id: "afilae",
        name: "afilae",
        description: "i18n.collectors.afilae.description",
        version: "0",
        website: "https://app.affilae.com/fr/advertiser/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135467.jpg",
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
        entryUrl: "https://app.affilae.com/fr/advertiser/billing/invoices",
    }

    constructor() {
        super(AfilaeCollector.CONFIG);
    }
}
