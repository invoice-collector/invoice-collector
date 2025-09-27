
import { SketchCollector } from '../../sketchCollector';

export class ArchivizerCollector extends SketchCollector {

    static CONFIG = {
        id: "archivizer",
        name: "Archivizer",
        description: "i18n.collectors.archivizer.description",
        version: "0",
        website: "https://archivizer.com/payments/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220917.jpg",
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
        entryUrl: "https://archivizer.com/payments/invoices",
    }

    constructor() {
        super(ArchivizerCollector.CONFIG);
    }
}
