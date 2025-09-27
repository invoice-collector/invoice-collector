
import { SketchCollector } from '../../sketchCollector';

export class FortoCollector extends SketchCollector {

    static CONFIG = {
        id: "forto",
        name: "Forto",
        description: "i18n.collectors.forto.description",
        version: "0",
        website: "https://ship.forto.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1863189.jpg",
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
        entryUrl: "https://ship.forto.com/invoices",
    }

    constructor() {
        super(FortoCollector.CONFIG);
    }
}
