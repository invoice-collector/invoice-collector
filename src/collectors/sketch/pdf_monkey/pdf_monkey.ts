
import { SketchCollector } from '../../sketchCollector';

export class PdfMonkeyCollector extends SketchCollector {

    static CONFIG = {
        id: "pdf_monkey",
        name: "PDF Monkey",
        description: "i18n.collectors.pdf_monkey.description",
        version: "0",
        website: "https://dashboard.pdfmonkey.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1035262.jpg",
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
        entryUrl: "https://dashboard.pdfmonkey.io/login",
    }

    constructor() {
        super(PdfMonkeyCollector.CONFIG);
    }
}
