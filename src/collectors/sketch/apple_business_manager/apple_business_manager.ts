
import { SketchCollector } from '../../sketchCollector';

export class AppleBusinessManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_business_manager",
        name: "Apple Business Manager",
        description: "i18n.collectors.apple_business_manager.description",
        version: "0",
        website: "https://business.apple.com/#main/accounts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/170974.jpg",
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
        entryUrl: "https://business.apple.com/#main/accounts",
    }

    constructor() {
        super(AppleBusinessManagerCollector.CONFIG);
    }
}
