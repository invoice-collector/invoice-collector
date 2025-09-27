
import { SketchCollector } from '../../sketchCollector';

export class NexmoCollector extends SketchCollector {

    static CONFIG = {
        id: "nexmo",
        name: "nexmo",
        description: "i18n.collectors.nexmo.description",
        version: "0",
        website: "https://dashboard.nexmo.com/billing-and-payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16789.jpg",
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
        entryUrl: "https://dashboard.nexmo.com/billing-and-payments",
    }

    constructor() {
        super(NexmoCollector.CONFIG);
    }
}
