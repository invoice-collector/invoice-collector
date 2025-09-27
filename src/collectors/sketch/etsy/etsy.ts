
import { SketchCollector } from '../../sketchCollector';

export class EtsyCollector extends SketchCollector {

    static CONFIG = {
        id: "etsy",
        name: "Etsy",
        description: "i18n.collectors.etsy.description",
        version: "0",
        website: "https://www.etsy.com/your/bill?ref=seller-platform-mcnav",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52929.jpg",
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
        entryUrl: "https://www.etsy.com/your/bill?ref=seller-platform-mcnav",
    }

    constructor() {
        super(EtsyCollector.CONFIG);
    }
}
