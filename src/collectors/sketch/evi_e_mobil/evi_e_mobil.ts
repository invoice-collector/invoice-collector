
import { SketchCollector } from '../../sketchCollector';

export class EviEMobilCollector extends SketchCollector {

    static CONFIG = {
        id: "evi_e_mobil",
        name: "EVI e-mobil",
        description: "i18n.collectors.evi_e_mobil.description",
        version: "0",
        website: "https://evi.emobilitycloud.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75352.jpg",
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
        entryUrl: "https://evi.emobilitycloud.com",
    }

    constructor() {
        super(EviEMobilCollector.CONFIG);
    }
}
