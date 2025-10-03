
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PdfCoCollector extends SketchCollector {

    static CONFIG = {
        id: "pdf_co",
        name: "PDF.co",
        description: "i18n.collectors.pdf_co.description",
        version: "0",
        website: "https://app.pdf.co/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1199625.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://app.pdf.co/account/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PdfCoCollector.CONFIG);
    }
}
