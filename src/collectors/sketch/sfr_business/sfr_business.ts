
import { SketchCollector } from '../../sketchCollector';

export class SfrBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "sfr_business",
        name: "SFR Business",
        description: "i18n.collectors.sfr_business.description",
        version: "0",
        website: "https://www.sfrbusiness.fr/espace-client/portail/#/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72746.jpg",
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
        entryUrl: "https://www.sfrbusiness.fr/espace-client/portail/#/factures",
    }

    constructor() {
        super(SfrBusinessCollector.CONFIG);
    }
}
