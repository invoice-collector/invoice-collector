
import { SketchCollector } from '../../sketchCollector';

export class NetdebitCollector extends SketchCollector {

    static CONFIG = {
        id: "netdebit",
        name: "NetDebit",
        description: "i18n.collectors.netdebit.description",
        version: "0",
        website: "https://www.netdebit-payment.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9750.jpg",
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
        entryUrl: "https://www.netdebit-payment.de/",
    }

    constructor() {
        super(NetdebitCollector.CONFIG);
    }
}
