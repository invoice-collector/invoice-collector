
import { SketchCollector } from '../../sketchCollector';

export class LodgifyCollector extends SketchCollector {

    static CONFIG = {
        id: "lodgify",
        name: "Lodgify",
        description: "i18n.collectors.lodgify.description",
        version: "0",
        website: "https://app.lodgify.com/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2670141.jpg",
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
        entryUrl: "https://app.lodgify.com/billing/invoices",
    }

    constructor() {
        super(LodgifyCollector.CONFIG);
    }
}
