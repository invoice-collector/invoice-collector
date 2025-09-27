
import { SketchCollector } from '../../sketchCollector';

export class MoebelDePartnerCollector extends SketchCollector {

    static CONFIG = {
        id: "moebel_de_partner",
        name: "moebel.de - Partner",
        description: "i18n.collectors.moebel_de_partner.description",
        version: "0",
        website: "https://partner.moebel.de/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/201880.jpg",
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
        entryUrl: "https://partner.moebel.de/invoices",
    }

    constructor() {
        super(MoebelDePartnerCollector.CONFIG);
    }
}
