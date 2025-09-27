
import { SketchCollector } from '../../sketchCollector';

export class VippsMobilepayCollector extends SketchCollector {

    static CONFIG = {
        id: "vipps_mobilepay",
        name: "Vipps MobilePay",
        description: "i18n.collectors.vipps_mobilepay.description",
        version: "0",
        website: "https://portal.vippsmobilepay.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4230605.jpg",
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
        entryUrl: "https://portal.vippsmobilepay.com/login",
    }

    constructor() {
        super(VippsMobilepayCollector.CONFIG);
    }
}
