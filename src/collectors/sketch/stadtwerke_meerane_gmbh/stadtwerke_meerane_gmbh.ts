
import { SketchCollector } from '../../sketchCollector';

export class StadtwerkeMeeraneGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "stadtwerke_meerane_gmbh",
        name: "STADTWERKE MEERANE GMBH",
        description: "i18n.collectors.stadtwerke_meerane_gmbh.description",
        version: "0",
        website: "https://kundenportal.sw-meerane.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/794864.jpg",
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
        entryUrl: "https://kundenportal.sw-meerane.de/login",
    }

    constructor() {
        super(StadtwerkeMeeraneGmbhCollector.CONFIG);
    }
}
