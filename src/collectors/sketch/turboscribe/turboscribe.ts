
import { SketchCollector } from '../../sketchCollector';

export class TurboscribeCollector extends SketchCollector {

    static CONFIG = {
        id: "turboscribe",
        name: "TurboScribe",
        description: "i18n.collectors.turboscribe.description",
        version: "0",
        website: "https://turboscribe.ai/de/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4503674.jpg",
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
        entryUrl: "https://turboscribe.ai/de/account/invoices",
    }

    constructor() {
        super(TurboscribeCollector.CONFIG);
    }
}
