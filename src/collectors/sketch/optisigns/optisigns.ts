
import { SketchCollector } from '../../sketchCollector';

export class OptisignsCollector extends SketchCollector {

    static CONFIG = {
        id: "optisigns",
        name: "OptiSigns",
        description: "i18n.collectors.optisigns.description",
        version: "0",
        website: "https://app.optisigns.com/app/s/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2797988.jpg",
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
        entryUrl: "https://app.optisigns.com/app/s/payment-history",
    }

    constructor() {
        super(OptisignsCollector.CONFIG);
    }
}
