
import { SketchCollector } from '../../sketchCollector';

export class AdtractionMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "adtraction_marketing",
        name: "Adtraction Marketing",
        description: "i18n.collectors.adtraction_marketing.description",
        version: "0",
        website: "https://adtraction.com/de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/432555.jpg",
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
        entryUrl: "https://adtraction.com/de/login",
    }

    constructor() {
        super(AdtractionMarketingCollector.CONFIG);
    }
}
