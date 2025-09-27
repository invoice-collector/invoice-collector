
import { SketchCollector } from '../../sketchCollector';

export class PdfArchitectCollector extends SketchCollector {

    static CONFIG = {
        id: "pdf_architect",
        name: "PDF Architect",
        description: "i18n.collectors.pdf_architect.description",
        version: "0",
        website: "http://myaccount.pdfarchitect.org/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779003.jpg",
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
        entryUrl: "http://myaccount.pdfarchitect.org/invoices",
    }

    constructor() {
        super(PdfArchitectCollector.CONFIG);
    }
}
