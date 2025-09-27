
import { SketchCollector } from '../../sketchCollector';

export class ArvivrCollector extends SketchCollector {

    static CONFIG = {
        id: "arvivr",
        name: "ArviVR",
        description: "i18n.collectors.arvivr.description",
        version: "0",
        website: "https://vrp.arvilab.com/client/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2250671.jpg",
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
        entryUrl: "https://vrp.arvilab.com/client/billing/invoices",
    }

    constructor() {
        super(ArvivrCollector.CONFIG);
    }
}
