
import { SketchCollector } from '../../sketchCollector';

export class KlarnaMerchantsCollector extends SketchCollector {

    static CONFIG = {
        id: "klarna_merchants",
        name: "Klarna - Merchants",
        description: "i18n.collectors.klarna_merchants.description",
        version: "0",
        website: "https://online.klarna.com/costs.yaws",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/47409.jpg",
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
        entryUrl: "https://online.klarna.com/costs.yaws",
    }

    constructor() {
        super(KlarnaMerchantsCollector.CONFIG);
    }
}
