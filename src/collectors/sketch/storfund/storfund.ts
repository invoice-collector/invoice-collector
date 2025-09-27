
import { SketchCollector } from '../../sketchCollector';

export class StorfundCollector extends SketchCollector {

    static CONFIG = {
        id: "storfund",
        name: "Storfund",
        description: "i18n.collectors.storfund.description",
        version: "0",
        website: "https://dashboard.storfund.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/747332.jpg",
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
        entryUrl: "https://dashboard.storfund.com/billing",
    }

    constructor() {
        super(StorfundCollector.CONFIG);
    }
}
