
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class Api2pdfCollector extends SketchCollector {

    static CONFIG = {
        id: "api2pdf",
        name: "api2pdf",
        description: "i18n.collectors.api2pdf.description",
        version: "0",
        website: "https://portal.api2pdf.com/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/158371.jpg",
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
        entryUrl: "https://portal.api2pdf.com/billing/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(Api2pdfCollector.CONFIG);
    }
}
