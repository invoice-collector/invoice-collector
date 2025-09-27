
import { SketchCollector } from '../../sketchCollector';

export class WonderboxPartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "wonderbox_partner",
        name: "Wonderbox Partner",
        description: "i18n.collectors.wonderbox_partner.description",
        version: "0",
        website: "https://espacepartenaire.wonderbox.fr/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4484335.jpg",
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
        entryUrl: "https://espacepartenaire.wonderbox.fr/account/invoices",
    }

    constructor() {
        super(WonderboxPartnerCollector.CONFIG);
    }
}
