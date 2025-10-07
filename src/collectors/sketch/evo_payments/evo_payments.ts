
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EvoPaymentsCollector extends SketchCollector {

    static CONFIG = {
        id: "evo_payments",
        name: "EVO Payments",
        description: "i18n.collectors.evo_payments.description",
        version: "0",
        website: "https://www.evopayments.eu/service/evo-kundenportal-bis/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7670.jpg",
        type: CollectorType.SKETCH,
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
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EvoPaymentsCollector.CONFIG);
    }
}
