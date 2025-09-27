
import { SketchCollector } from '../../sketchCollector';

export class AmazonVendorCentralEsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_vendor_central_es",
        name: "Amazon Vendor Central (.es)",
        description: "i18n.collectors.amazon_vendor_central_es.description",
        version: "0",
        website: "https://vendorcentral.amazon.es/gp/vendor/members/contracogs?ref_=vc_ven-ven-home_subNav",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126840.jpg",
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
        entryUrl: "https://vendorcentral.amazon.es/gp/vendor/members/contracogs?ref_=vc_ven-ven-home_subNav",
    }

    constructor() {
        super(AmazonVendorCentralEsCollector.CONFIG);
    }
}
