
import { SketchCollector } from '../../sketchCollector';

export class FlexoffersCollector extends SketchCollector {

    static CONFIG = {
        id: "flexoffers",
        name: "FlexOffers",
        description: "i18n.collectors.flexoffers.description",
        version: "0",
        website: "https://publisherpro.flexoffers.com/PaymentHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202981.jpg",
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
        entryUrl: "https://publisherpro.flexoffers.com/PaymentHistory",
    }

    constructor() {
        super(FlexoffersCollector.CONFIG);
    }
}
