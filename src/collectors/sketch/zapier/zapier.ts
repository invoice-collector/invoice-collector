
import { SketchCollector } from '../../sketchCollector';

export class ZapierCollector extends SketchCollector {

    static CONFIG = {
        id: "zapier",
        name: "Zapier",
        description: "i18n.collectors.zapier.description",
        version: "0",
        website: "https://zapier.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8726.jpg",
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
        entryUrl: "https://zapier.com",
    }

    constructor() {
        super(ZapierCollector.CONFIG);
    }
}
