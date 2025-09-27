
import { SketchCollector } from '../../sketchCollector';

export class PlaneteDomotiqueCollector extends SketchCollector {

    static CONFIG = {
        id: "planete_domotique",
        name: "Planete Domotique",
        description: "i18n.collectors.planete_domotique.description",
        version: "0",
        website: "https://www.planete-domotique.com/customer/account/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122819.jpg",
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
        entryUrl: "https://www.planete-domotique.com/customer/account/login/",
    }

    constructor() {
        super(PlaneteDomotiqueCollector.CONFIG);
    }
}
