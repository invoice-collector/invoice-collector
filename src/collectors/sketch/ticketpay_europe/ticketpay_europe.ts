
import { SketchCollector } from '../../sketchCollector';

export class TicketpayEuropeCollector extends SketchCollector {

    static CONFIG = {
        id: "ticketpay_europe",
        name: "TicketPay Europe",
        description: "i18n.collectors.ticketpay_europe.description",
        version: "0",
        website: "https://signin.ticketpay.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/40549.jpg",
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
        entryUrl: "https://signin.ticketpay.de/login",
    }

    constructor() {
        super(TicketpayEuropeCollector.CONFIG);
    }
}
