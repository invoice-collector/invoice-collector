
import { SketchCollector } from '../../sketchCollector';

export class SkimlinksCollector extends SketchCollector {

    static CONFIG = {
        id: "skimlinks",
        name: "Skimlinks",
        description: "i18n.collectors.skimlinks.description",
        version: "0",
        website: "https://hub.skimlinks.com/payments/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/103359.jpg",
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
        entryUrl: "https://hub.skimlinks.com/payments/history",
    }

    constructor() {
        super(SkimlinksCollector.CONFIG);
    }
}
