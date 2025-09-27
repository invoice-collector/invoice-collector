
import { SketchCollector } from '../../sketchCollector';

export class AmazonVendorCentralCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_vendor_central_co_uk",
        name: "Amazon Vendor Central (.co.uk)",
        description: "i18n.collectors.amazon_vendor_central_co_uk.description",
        version: "0",
        website: "https://vendorcentral.amazon.co.uk/home/vc",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/87313.jpg",
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
        entryUrl: "https://vendorcentral.amazon.co.uk/home/vc",
    }

    constructor() {
        super(AmazonVendorCentralCoUkCollector.CONFIG);
    }
}
