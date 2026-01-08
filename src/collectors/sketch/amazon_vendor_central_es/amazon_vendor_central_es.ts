
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonVendorCentralEsCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_vendor_central_es",
        name: "Amazon Vendor Central (.es)",
        description: "i18n.collectors.amazon_vendor_central_es.description",
        version: "0",
        website: "https://vendorcentral.amazon.es/gp/vendor/members/contracogs?ref_=vc_ven-ven-home_subNav",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126840.jpg",
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
        loginUrl: "https://vendorcentral.amazon.es/gp/vendor/members/contracogs?ref_=vc_ven-ven-home_subNav",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonVendorCentralEsCollector.CONFIG);
    }
}
