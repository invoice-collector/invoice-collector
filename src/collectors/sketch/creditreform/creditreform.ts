
import { SketchCollector } from '../../sketchCollector';

export class CreditreformCollector extends SketchCollector {

    static CONFIG = {
        id: "creditreform",
        name: "Creditreform",
        description: "i18n.collectors.creditreform.description",
        version: "0",
        website: "https://meine.creditreform.de/vorgaenge/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122550.jpg",
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
        entryUrl: "https://meine.creditreform.de/vorgaenge/",
    }

    constructor() {
        super(CreditreformCollector.CONFIG);
    }
}
