
import { SketchCollector } from '../../sketchCollector';

export class FiberyCollector extends SketchCollector {

    static CONFIG = {
        id: "fibery",
        name: "Fibery",
        description: "i18n.collectors.fibery.description",
        version: "0",
        website: "https://iq-hub.fibery.io/fibery/settings/plan-and-billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4513689.jpg",
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
        entryUrl: "https://iq-hub.fibery.io/fibery/settings/plan-and-billing",
    }

    constructor() {
        super(FiberyCollector.CONFIG);
    }
}
