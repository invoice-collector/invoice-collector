
import { SketchCollector } from '../../sketchCollector';

export class DuoSecurityCollector extends SketchCollector {

    static CONFIG = {
        id: "duo_security",
        name: "Duo Security",
        description: "i18n.collectors.duo_security.description",
        version: "0",
        website: "https://admin-4c9fdb22.duosecurity.com/billing/billing-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1271406.jpg",
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
        entryUrl: "https://admin-4c9fdb22.duosecurity.com/billing/billing-history",
    }

    constructor() {
        super(DuoSecurityCollector.CONFIG);
    }
}
