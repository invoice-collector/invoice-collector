
import { SketchCollector } from '../../sketchCollector';

export class LandkreisRostockEigenbetriebAbfallwirtschaftCollector extends SketchCollector {

    static CONFIG = {
        id: "landkreis_rostock_eigenbetrieb_abfallwirtschaft",
        name: "Landkreis Rostock Eigenbetrieb Abfallwirtschaft",
        description: "i18n.collectors.landkreis_rostock_eigenbetrieb_abfallwirtschaft.description",
        version: "0",
        website: "https://www.landkreis-rostock.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060578.jpg",
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
        entryUrl: "https://www.landkreis-rostock.de",
    }

    constructor() {
        super(LandkreisRostockEigenbetriebAbfallwirtschaftCollector.CONFIG);
    }
}
