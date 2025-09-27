
import { SketchCollector } from '../../sketchCollector';

export class InstawpCollector extends SketchCollector {

    static CONFIG = {
        id: "instawp",
        name: "InstaWP",
        description: "i18n.collectors.instawp.description",
        version: "0",
        website: "https://app.instawp.io/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730436.jpg",
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
        entryUrl: "https://app.instawp.io/invoices",
    }

    constructor() {
        super(InstawpCollector.CONFIG);
    }
}
