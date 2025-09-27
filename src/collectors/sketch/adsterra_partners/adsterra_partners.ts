
import { SketchCollector } from '../../sketchCollector';

export class AdsterraPartnersCollector extends SketchCollector {

    static CONFIG = {
        id: "adsterra_partners",
        name: "Adsterra Partners",
        description: "i18n.collectors.adsterra_partners.description",
        version: "0",
        website: "https://partners.adsterra.com/finances",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/524549.jpg",
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
        entryUrl: "https://partners.adsterra.com/finances",
    }

    constructor() {
        super(AdsterraPartnersCollector.CONFIG);
    }
}
