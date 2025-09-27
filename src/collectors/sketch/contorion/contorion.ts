
import { SketchCollector } from '../../sketchCollector';

export class ContorionCollector extends SketchCollector {

    static CONFIG = {
        id: "contorion",
        name: "Contorion",
        description: "i18n.collectors.contorion.description",
        version: "0",
        website: "https://www.contorion.de/customer/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17139.jpg",
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
        entryUrl: "https://www.contorion.de/customer/orders",
    }

    constructor() {
        super(ContorionCollector.CONFIG);
    }
}
