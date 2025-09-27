
import { SketchCollector } from '../../sketchCollector';

export class ImpargoCollector extends SketchCollector {

    static CONFIG = {
        id: "impargo",
        name: "Impargo",
        description: "i18n.collectors.impargo.description",
        version: "0",
        website: "https://apps.impargo.de/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4553678.jpg",
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
        entryUrl: "https://apps.impargo.de/settings/invoices",
    }

    constructor() {
        super(ImpargoCollector.CONFIG);
    }
}
