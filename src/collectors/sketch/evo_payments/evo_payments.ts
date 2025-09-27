
import { SketchCollector } from '../../sketchCollector';

export class EvoPaymentsCollector extends SketchCollector {

    static CONFIG = {
        id: "evo_payments",
        name: "EVO Payments",
        description: "i18n.collectors.evo_payments.description",
        version: "0",
        website: "https://www.evopayments.eu/service/evo-kundenportal-bis/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7670.jpg",
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
        entryUrl: "https://www.evopayments.eu/service/evo-kundenportal-bis/",
    }

    constructor() {
        super(EvoPaymentsCollector.CONFIG);
    }
}
