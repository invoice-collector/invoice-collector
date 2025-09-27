
import { SketchCollector } from '../../sketchCollector';

export class FloshipCollector extends SketchCollector {

    static CONFIG = {
        id: "floship",
        name: "Floship",
        description: "i18n.collectors.floship.description",
        version: "0",
        website: "https://admin.floship.com/billing/estimated-balance/pending_fulfilment?sort_by=-create_date",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/544061.jpg",
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
        entryUrl: "https://admin.floship.com/billing/estimated-balance/pending_fulfilment?sort_by=-create_date",
    }

    constructor() {
        super(FloshipCollector.CONFIG);
    }
}
