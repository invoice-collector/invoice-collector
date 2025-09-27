
import { SketchCollector } from '../../sketchCollector';

export class DirectadminCollector extends SketchCollector {

    static CONFIG = {
        id: "directadmin",
        name: "DirectAdmin",
        description: "i18n.collectors.directadmin.description",
        version: "0",
        website: "https://www.directadmin.com/clients/invoices.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2141145.jpg",
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
        entryUrl: "https://www.directadmin.com/clients/invoices.php",
    }

    constructor() {
        super(DirectadminCollector.CONFIG);
    }
}
