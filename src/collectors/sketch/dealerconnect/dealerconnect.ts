
import { SketchCollector } from '../../sketchCollector';

export class DealerconnectCollector extends SketchCollector {

    static CONFIG = {
        id: "dealerconnect",
        name: "DealerCONNECT",
        description: "i18n.collectors.dealerconnect.description",
        version: "0",
        website: "https://dealerconnect.chrysler.com/portal/Controller/Portal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4458795.jpg",
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
        entryUrl: "https://dealerconnect.chrysler.com/portal/Controller/Portal",
    }

    constructor() {
        super(DealerconnectCollector.CONFIG);
    }
}
