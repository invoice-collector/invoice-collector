
import { SketchCollector } from '../../sketchCollector';

export class ProductiveCollector extends SketchCollector {

    static CONFIG = {
        id: "productive",
        name: "productive",
        description: "i18n.collectors.productive.description",
        version: "0",
        website: "https://app.productive.io/26357-hub633-creative/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953759.jpg",
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
        entryUrl: "https://app.productive.io/26357-hub633-creative/settings/billing",
    }

    constructor() {
        super(ProductiveCollector.CONFIG);
    }
}
