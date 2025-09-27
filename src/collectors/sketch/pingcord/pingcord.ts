
import { SketchCollector } from '../../sketchCollector';

export class PingcordCollector extends SketchCollector {

    static CONFIG = {
        id: "pingcord",
        name: "Pingcord",
        description: "i18n.collectors.pingcord.description",
        version: "0",
        website: "https://pingcord.xyz/payments/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105958.jpg",
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
        entryUrl: "https://pingcord.xyz/payments/receipts",
    }

    constructor() {
        super(PingcordCollector.CONFIG);
    }
}
