
import { SketchCollector } from '../../sketchCollector';

export class LocalizeCollector extends SketchCollector {

    static CONFIG = {
        id: "localize",
        name: "Localize",
        description: "i18n.collectors.localize.description",
        version: "0",
        website: "https://app.localizejs.com/settings/organization/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777819.jpg",
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
        entryUrl: "https://app.localizejs.com/settings/organization/invoices",
    }

    constructor() {
        super(LocalizeCollector.CONFIG);
    }
}
