
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmazonVendorCentralNlCollector extends SketchCollector {

    static CONFIG = {
        id: "amazon_vendor_central_nl",
        name: "Amazon Vendor Central (.nl)",
        description: "i18n.collectors.amazon_vendor_central_nl.description",
        version: "0",
        website: "https://vendorcentral.amazon.nl/gp/vendor/sign-in/257-4832853-4155409?ie=UTF8&originatingURI=%2Fgp%2Fvendor%2Fmembers%2Fhome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/553397.jpg",
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
        entryUrl: "https://vendorcentral.amazon.nl/gp/vendor/sign-in/257-4832853-4155409?ie=UTF8&originatingURI=%2Fgp%2Fvendor%2Fmembers%2Fhome",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmazonVendorCentralNlCollector.CONFIG);
    }
}
