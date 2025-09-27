
import { SketchCollector } from '../../sketchCollector';

export class HappyScribeCollector extends SketchCollector {

    static CONFIG = {
        id: "happy_scribe",
        name: "Happy Scribe",
        description: "i18n.collectors.happy_scribe.description",
        version: "0",
        website: "https://www.happyscribe.co/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74289.jpg",
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
        entryUrl: "https://www.happyscribe.co/invoices",
    }

    constructor() {
        super(HappyScribeCollector.CONFIG);
    }
}
