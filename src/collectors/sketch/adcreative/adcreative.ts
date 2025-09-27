
import { SketchCollector } from '../../sketchCollector';

export class AdcreativeCollector extends SketchCollector {

    static CONFIG = {
        id: "adcreative",
        name: "AdCreative",
        description: "i18n.collectors.adcreative.description",
        version: "0",
        website: "https://app.adcreative.ai/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863366.jpg",
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
        entryUrl: "https://app.adcreative.ai/settings",
    }

    constructor() {
        super(AdcreativeCollector.CONFIG);
    }
}
