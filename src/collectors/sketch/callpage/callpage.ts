
import { SketchCollector } from '../../sketchCollector';

export class CallpageCollector extends SketchCollector {

    static CONFIG = {
        id: "callpage",
        name: "CallPage",
        description: "i18n.collectors.callpage.description",
        version: "0",
        website: "https://app.callpage.io/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3203498.jpg",
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
        entryUrl: "https://app.callpage.io/billing/invoices",
    }

    constructor() {
        super(CallpageCollector.CONFIG);
    }
}
