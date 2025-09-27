
import { SketchCollector } from '../../sketchCollector';

export class IcfHabitatCollector extends SketchCollector {

    static CONFIG = {
        id: "icf_habitat",
        name: "ICF Habitat",
        description: "i18n.collectors.icf_habitat.description",
        version: "0",
        website: "https://www.espaceclient.icfhabitat.fr/locataires/index.php/accueil-non-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/108556.jpg",
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
        entryUrl: "https://www.espaceclient.icfhabitat.fr/locataires/index.php/accueil-non-connecte",
    }

    constructor() {
        super(IcfHabitatCollector.CONFIG);
    }
}
