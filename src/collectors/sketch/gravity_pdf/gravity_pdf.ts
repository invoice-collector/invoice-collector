
import { SketchCollector } from '../../sketchCollector';

export class GravityPdfCollector extends SketchCollector {

    static CONFIG = {
        id: "gravity_pdf",
        name: "Gravity PDF",
        description: "i18n.collectors.gravity_pdf.description",
        version: "0",
        website: "https://gravitypdf.com/checkout/purchase-confirmation/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45121.jpg",
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
        entryUrl: "https://gravitypdf.com/checkout/purchase-confirmation/",
    }

    constructor() {
        super(GravityPdfCollector.CONFIG);
    }
}
