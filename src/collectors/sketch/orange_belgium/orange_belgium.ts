
import { SketchCollector } from '../../sketchCollector';

export class OrangeBelgiumCollector extends SketchCollector {

    static CONFIG = {
        id: "orange_belgium",
        name: "Orange Belgium",
        description: "i18n.collectors.orange_belgium.description",
        version: "0",
        website: "https://e-services.orange.be/fr/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120871.jpg",
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
        entryUrl: "https://e-services.orange.be/fr/invoices",
    }

    constructor() {
        super(OrangeBelgiumCollector.CONFIG);
    }
}
