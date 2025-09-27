
import { SketchCollector } from '../../sketchCollector';

export class StormproxiesComCollector extends SketchCollector {

    static CONFIG = {
        id: "stormproxies_com",
        name: "stormproxies.com",
        description: "i18n.collectors.stormproxies_com.description",
        version: "0",
        website: "https://stormproxies.com/clients/member/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28955.jpg",
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
        entryUrl: "https://stormproxies.com/clients/member/payment-history",
    }

    constructor() {
        super(StormproxiesComCollector.CONFIG);
    }
}
