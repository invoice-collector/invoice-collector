
import { SketchCollector } from '../../sketchCollector';

export class KontentinoCollector extends SketchCollector {

    static CONFIG = {
        id: "kontentino",
        name: "Kontentino",
        description: "i18n.collectors.kontentino.description",
        version: "0",
        website: "https://combyne.kontentino.com/billing/payments/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/203069.jpg",
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
        entryUrl: "https://combyne.kontentino.com/billing/payments/history",
    }

    constructor() {
        super(KontentinoCollector.CONFIG);
    }
}
