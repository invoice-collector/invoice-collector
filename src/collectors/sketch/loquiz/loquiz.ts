
import { SketchCollector } from '../../sketchCollector';

export class LoquizCollector extends SketchCollector {

    static CONFIG = {
        id: "loquiz",
        name: "Loquiz",
        description: "i18n.collectors.loquiz.description",
        version: "0",
        website: "https://creator.loquiz.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3020638.jpg",
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
        entryUrl: "https://creator.loquiz.com/billing",
    }

    constructor() {
        super(LoquizCollector.CONFIG);
    }
}
