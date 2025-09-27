
import { SketchCollector } from '../../sketchCollector';

export class VeroCollector extends SketchCollector {

    static CONFIG = {
        id: "vero",
        name: "Vero",
        description: "i18n.collectors.vero.description",
        version: "0",
        website: "https://app.getvero.com/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/80694.jpg",
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
        entryUrl: "https://app.getvero.com/account/invoices",
    }

    constructor() {
        super(VeroCollector.CONFIG);
    }
}
