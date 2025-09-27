
import { SketchCollector } from '../../sketchCollector';

export class PremiumsimCollector extends SketchCollector {

    static CONFIG = {
        id: "premiumsim",
        name: "PremiumSIM",
        description: "i18n.collectors.premiumsim.description",
        version: "0",
        website: "https://service.premiumsim.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8323.jpg",
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
        entryUrl: "https://service.premiumsim.de",
    }

    constructor() {
        super(PremiumsimCollector.CONFIG);
    }
}
