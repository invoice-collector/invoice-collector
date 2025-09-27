
import { SketchCollector } from '../../sketchCollector';

export class DeliverectCollector extends SketchCollector {

    static CONFIG = {
        id: "deliverect",
        name: "DELIVERECT",
        description: "i18n.collectors.deliverect.description",
        version: "0",
        website: "https://deliverect.chargebeeportal.com/portal/v2/billing_history?source=home",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1219818.jpg",
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
        entryUrl: "https://deliverect.chargebeeportal.com/portal/v2/billing_history?source=home",
    }

    constructor() {
        super(DeliverectCollector.CONFIG);
    }
}
