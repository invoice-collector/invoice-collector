
import { SketchCollector } from '../../sketchCollector';

export class PaymentEvolutionPayevoCollector extends SketchCollector {

    static CONFIG = {
        id: "payment_evolution_payevo",
        name: "Payment Evolution - PayEvo",
        description: "i18n.collectors.payment_evolution_payevo.description",
        version: "0",
        website: "https://paymentevolution.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513848.jpg",
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
        entryUrl: "https://paymentevolution.com/",
    }

    constructor() {
        super(PaymentEvolutionPayevoCollector.CONFIG);
    }
}
