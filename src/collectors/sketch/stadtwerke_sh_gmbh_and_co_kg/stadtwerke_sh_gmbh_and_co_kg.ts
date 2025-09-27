
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeShGmbhAndCoKgCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_sh_gmbh_and_co_kg",
        name: "Stadtwerke SH GmbH & Co. KG",
        description: "i18n.collectors.stadtwerke_sh_gmbh_and_co_kg.description",
        version: "0",
        website: "https://www.stadtwerke-sh.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2549165.jpg",
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
        entryUrl: "https://www.stadtwerke-sh.de/",
    }

    constructor() {
        super(StadtwerkeShGmbhAndCoKgCollector.CONFIG);
    }
}
