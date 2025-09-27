
import { SketchCollector } from '../../sketchCollector';

export class CabifyCollector extends SketchCollector {

    static CONFIG = {
        id: "cabify",
        name: "Cabify",
        description: "i18n.collectors.cabify.description",
        version: "0",
        website: "https://www.cabify.com/app/billing/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/61673.jpg",
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
        entryUrl: "https://www.cabify.com/app/billing/receipts",
    }

    constructor() {
        super(CabifyCollector.CONFIG);
    }
}
