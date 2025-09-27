
import { SketchCollector } from '../../sketchCollector';

export class AjlAbfallwirtschaftsgesellschaftJerichowerLandMbhCollector extends SketchCollector {

    static CONFIG = {
        id: "ajl_abfallwirtschaftsgesellschaft_jerichower_land_mbh",
        name: "AJL - Abfallwirtschaftsgesellschaft Jerichower Land mbH",
        description: "i18n.collectors.ajl_abfallwirtschaftsgesellschaft_jerichower_land_mbh.description",
        version: "0",
        website: "https://kundenportal.ajl-mbh.de/documents",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2730019.jpg",
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
        entryUrl: "https://kundenportal.ajl-mbh.de/documents",
    }

    constructor() {
        super(AjlAbfallwirtschaftsgesellschaftJerichowerLandMbhCollector.CONFIG);
    }
}
