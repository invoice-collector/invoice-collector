
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ElevonMerchantServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "elevon_merchant_services",
        name: "Elevon Merchant Services",
        description: "i18n.collectors.elevon_merchant_services.description",
        version: "0",
        website: "http://www.elavon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8882.jpg",
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
        entryUrl: "http://www.elavon.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ElevonMerchantServicesCollector.CONFIG);
    }
}
