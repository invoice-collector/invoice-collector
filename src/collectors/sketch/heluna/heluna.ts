
import { SketchCollector } from '../../sketchCollector';

export class HelunaCollector extends SketchCollector {

    static CONFIG = {
        id: "heluna",
        name: "Heluna",
        description: "i18n.collectors.heluna.description",
        version: "0",
        website: "https://heluna.com/clients/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102410.jpg",
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
        entryUrl: "https://heluna.com/clients/account/invoices",
    }

    constructor() {
        super(HelunaCollector.CONFIG);
    }
}
