
import { SketchCollector } from '../../sketchCollector';

export class LandrCollector extends SketchCollector {

    static CONFIG = {
        id: "landr",
        name: "Landr",
        description: "i18n.collectors.landr.description",
        version: "0",
        website: "https://app.landr.com/account/billing/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/57870.jpg",
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
        entryUrl: "https://app.landr.com/account/billing/invoices",
    }

    constructor() {
        super(LandrCollector.CONFIG);
    }
}
