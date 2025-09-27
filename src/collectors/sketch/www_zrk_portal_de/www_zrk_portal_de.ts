
import { SketchCollector } from '../../sketchCollector';

export class WwwZrkPortalDeCollector extends SketchCollector {

    static CONFIG = {
        id: "www_zrk_portal_de",
        name: "www.zrk-portal.de",
        description: "i18n.collectors.www_zrk_portal_de.description",
        version: "0",
        website: "https://www.zrk-portal.de/azh_oc/noc/pt/rezeptAbrechnung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1649677.jpg",
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
        entryUrl: "https://www.zrk-portal.de/azh_oc/noc/pt/rezeptAbrechnung",
    }

    constructor() {
        super(WwwZrkPortalDeCollector.CONFIG);
    }
}
