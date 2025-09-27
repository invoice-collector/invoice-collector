
import { SketchCollector } from '../../sketchCollector';

export class MinsterEbillingCollector extends SketchCollector {

    static CONFIG = {
        id: "minster_ebilling",
        name: "Minster eBilling",
        description: "i18n.collectors.minster_ebilling.description",
        version: "0",
        website: "https://billing.minsteronline.co.uk/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/472934.jpg",
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
        entryUrl: "https://billing.minsteronline.co.uk/",
    }

    constructor() {
        super(MinsterEbillingCollector.CONFIG);
    }
}
