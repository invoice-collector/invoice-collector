
import { SketchCollector } from '../../sketchCollector';

export class CnmssRelevesMensuelsCollector extends SketchCollector {

    static CONFIG = {
        id: "cnmss_releves_mensuels",
        name: "CNMSS (releves mensuels)",
        description: "i18n.collectors.cnmss_releves_mensuels.description",
        version: "0",
        website: "https://www.cnmss.fr/professionnel-de-sante/en-1-clic-449.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123799.jpg",
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
        entryUrl: "https://www.cnmss.fr/professionnel-de-sante/en-1-clic-449.html",
    }

    constructor() {
        super(CnmssRelevesMensuelsCollector.CONFIG);
    }
}
