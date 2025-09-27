
import { SketchCollector } from '../../sketchCollector';

export class EinsEnergieInSachsenGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "eins_energie_in_sachsen_gmbh_and_co_kg",
        name: "eins Energie in Sachsen GmbH & Co. KG",
        description: "i18n.collectors.eins_energie_in_sachsen_gmbh_and_co_kg.description",
        version: "0",
        website: "https://onlineservice.eins.de/powercommerce/eins/fo/portal/start?_ga=2.255272256.950415654.1558015875-1970041404.1558015875",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/129023.jpg",
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
        entryUrl: "https://onlineservice.eins.de/powercommerce/eins/fo/portal/start?_ga=2.255272256.950415654.1558015875-1970041404.1558015875",
    }

    constructor() {
        super(EinsEnergieInSachsenGmbhAndCoKgCollector.CONFIG);
    }
}
