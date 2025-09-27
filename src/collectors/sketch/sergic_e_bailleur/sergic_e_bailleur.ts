
import { SketchCollector } from '../../sketchCollector';

export class SergicEBailleurCollector extends SketchCollector {

    static CONFIG = {
        id: "sergic_e_bailleur",
        name: "Sergic- E-Bailleur",
        description: "i18n.collectors.sergic_e_bailleur.description",
        version: "0",
        website: "https://www.ebailleur.sergic.com/pages/bailleur/identification.seam",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108734.jpg",
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
        entryUrl: "https://www.ebailleur.sergic.com/pages/bailleur/identification.seam",
    }

    constructor() {
        super(SergicEBailleurCollector.CONFIG);
    }
}
