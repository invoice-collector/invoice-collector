
import { SketchCollector } from '../../sketchCollector';

export class GetproperlyCollector extends SketchCollector {

    static CONFIG = {
        id: "getproperly",
        name: "Getproperly",
        description: "i18n.collectors.getproperly.description",
        version: "0",
        website: "https://app.getproperly.com/#/settings/receipts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513899.jpg",
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
        entryUrl: "https://app.getproperly.com/#/settings/receipts",
    }

    constructor() {
        super(GetproperlyCollector.CONFIG);
    }
}
