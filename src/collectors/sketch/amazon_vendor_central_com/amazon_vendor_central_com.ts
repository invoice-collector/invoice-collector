
import { SketchCollector } from '../../sketchCollector';

export class AmazonVendorCentralComCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_vendor_central_com",
        name: "Amazon Vendor Central (.com)",
        description: "i18n.collectors.amazon_vendor_central_com.description",
        version: "0",
        website: "https://vendorcentral.amazon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/38610.jpg",
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
        entryUrl: "https://vendorcentral.amazon.com",
    }

    constructor() {
        super(AmazonVendorCentralComCollector.CONFIG);
    }
}
