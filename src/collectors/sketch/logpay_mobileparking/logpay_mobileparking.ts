
import { SketchCollector } from '../../sketchCollector';

export class LogpayMobileparkingCollector extends SketchCollector {

    static CONFIG = {
        id: "logpay_mobileparking",
        name: "LogPay MobileParking",
        description: "i18n.collectors.logpay_mobileparking.description",
        version: "0",
        website: "https://www.logpay.de/DE/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/222565.jpg",
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
        entryUrl: "https://www.logpay.de/DE/",
    }

    constructor() {
        super(LogpayMobileparkingCollector.CONFIG);
    }
}
