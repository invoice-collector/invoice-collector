
import { SketchCollector } from '../../sketchCollector';

export class HansemerkurPartnerLoginCollector extends SketchCollector {

    static CONFIG = {
        id: "hansemerkur_partner_login",
        name: "HanseMerkur - Partner Login",
        description: "i18n.collectors.hansemerkur_partner_login.description",
        version: "0",
        website: "https://b2b.hmrv.de/buchen-verwalten/statistik-abrechnung/abrechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4677241.jpg",
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
        entryUrl: "https://b2b.hmrv.de/buchen-verwalten/statistik-abrechnung/abrechnungen",
    }

    constructor() {
        super(HansemerkurPartnerLoginCollector.CONFIG);
    }
}
