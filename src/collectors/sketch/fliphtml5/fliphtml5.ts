
import { SketchCollector } from '../../sketchCollector';

export class Fliphtml5Collector extends SketchCollector {

    static CONFIG = {
        id: "fliphtml5",
        name: "FLIPHTML5",
        description: "i18n.collectors.fliphtml5.description",
        version: "0",
        website: "https://fliphtml5.com/de/center/billing/#Billing-Cycle",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727894.jpg",
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
        entryUrl: "https://fliphtml5.com/de/center/billing/#Billing-Cycle",
    }

    constructor() {
        super(Fliphtml5Collector.CONFIG);
    }
}
