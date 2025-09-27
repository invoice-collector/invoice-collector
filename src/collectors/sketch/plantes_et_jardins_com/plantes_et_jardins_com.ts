
import { SketchCollector } from '../../sketchCollector';

export class PlantesEtJardinsComCollector extends SketchCollector {

    static CONFIG = {
        id: "plantes_et_jardins_com",
        name: "Plantes-et-jardins.com",
        description: "i18n.collectors.plantes_et_jardins_com.description",
        version: "0",
        website: "https://www.gammvert.fr/id/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/122815.jpg",
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
        entryUrl: "https://www.gammvert.fr/id/connexion",
    }

    constructor() {
        super(PlantesEtJardinsComCollector.CONFIG);
    }
}
