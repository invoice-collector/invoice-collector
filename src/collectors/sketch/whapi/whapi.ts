
import { SketchCollector } from '../../sketchCollector';

export class WhapiCollector extends SketchCollector {

    static CONFIG = {
        id: "whapi",
        name: "Whapi",
        description: "i18n.collectors.whapi.description",
        version: "0",
        website: "https://panel.whapi.cloud/billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4693591.jpg",
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
        entryUrl: "https://panel.whapi.cloud/billing/history",
    }

    constructor() {
        super(WhapiCollector.CONFIG);
    }
}
