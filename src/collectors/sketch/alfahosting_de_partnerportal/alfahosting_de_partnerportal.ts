
import { SketchCollector } from '../../sketchCollector';

export class AlfahostingDePartnerportalCollector extends SketchCollector {

    static CONFIG = {
        id: "alfahosting_de_partnerportal",
        name: "Alfahosting.de - Partnerportal",
        description: "i18n.collectors.alfahosting_de_partnerportal.description",
        version: "0",
        website: "https://alfahosting.de/affiliate-login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/52869.jpg",
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
        entryUrl: "https://alfahosting.de/affiliate-login/",
    }

    constructor() {
        super(AlfahostingDePartnerportalCollector.CONFIG);
    }
}
