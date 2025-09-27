
import { SketchCollector } from '../../sketchCollector';

export class VooCollector extends SketchCollector {

    static CONFIG = {
        id: "voo",
        name: "VOO",
        description: "i18n.collectors.voo.description",
        version: "0",
        website: "https://newmy.voo.be/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/396170.jpg",
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
        entryUrl: "https://newmy.voo.be/invoices",
    }

    constructor() {
        super(VooCollector.CONFIG);
    }
}
