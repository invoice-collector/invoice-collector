
import { SketchCollector } from '../../sketchCollector';

export class InflueeCollector extends SketchCollector {

    static CONFIG = {
        id: "influee",
        name: "Influee",
        description: "i18n.collectors.influee.description",
        version: "0",
        website: "https://dashboard.influee.co/billing/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2134129.jpg",
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
        entryUrl: "https://dashboard.influee.co/billing/subscription",
    }

    constructor() {
        super(InflueeCollector.CONFIG);
    }
}
