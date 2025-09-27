
import { SketchCollector } from '../../sketchCollector';

export class RingoverCollector extends SketchCollector {

    static CONFIG = {
        id: "ringover",
        name: "Ringover",
        description: "i18n.collectors.ringover.description",
        version: "0",
        website: "https://dashboard.ringover.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/152277.jpg",
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
        entryUrl: "https://dashboard.ringover.com/billing",
    }

    constructor() {
        super(RingoverCollector.CONFIG);
    }
}
