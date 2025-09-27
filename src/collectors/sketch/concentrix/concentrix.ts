
import { SketchCollector } from '../../sketchCollector';

export class ConcentrixCollector extends SketchCollector {

    static CONFIG = {
        id: "concentrix",
        name: "Concentrix",
        description: "i18n.collectors.concentrix.description",
        version: "0",
        website: "https://retaileronline.fdi-logbox.com/documents/invoicingDocuments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4188532.jpg",
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
        entryUrl: "https://retaileronline.fdi-logbox.com/documents/invoicingDocuments",
    }

    constructor() {
        super(ConcentrixCollector.CONFIG);
    }
}
