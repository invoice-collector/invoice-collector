
import { SketchCollector } from '../../sketchCollector';

export class SeobilityCollector extends SketchCollector {

    static CONFIG = {
        id: "seobility",
        name: "Seobility",
        description: "i18n.collectors.seobility.description",
        version: "0",
        website: "https://www.seobility.net/de/settings/invoices/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10058.jpg",
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
        entryUrl: "https://www.seobility.net/de/settings/invoices/",
    }

    constructor() {
        super(SeobilityCollector.CONFIG);
    }
}
