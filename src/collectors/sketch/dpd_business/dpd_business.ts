
import { SketchCollector } from '../../sketchCollector';

export class DpdBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "dpd_business",
        name: "DPD Business",
        description: "i18n.collectors.dpd_business.description",
        version: "0",
        website: "https://business.dpd.de/profil/meinkonto/rechnung-archiv.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2515103.jpg",
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
        entryUrl: "https://business.dpd.de/profil/meinkonto/rechnung-archiv.aspx",
    }

    constructor() {
        super(DpdBusinessCollector.CONFIG);
    }
}
