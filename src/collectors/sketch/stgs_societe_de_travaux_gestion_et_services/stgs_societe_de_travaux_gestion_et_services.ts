
import { SketchCollector } from '../../sketchCollector';

export class StgsSocieteDeTravauxGestionEtServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "stgs_societe_de_travaux_gestion_et_services",
        name: "STGS - Societe de Travaux Gestion et Services",
        description: "i18n.collectors.stgs_societe_de_travaux_gestion_et_services.description",
        version: "0",
        website: "https://espaceabonne.stgs.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/846105.jpg",
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
        entryUrl: "https://espaceabonne.stgs.fr/",
    }

    constructor() {
        super(StgsSocieteDeTravauxGestionEtServicesCollector.CONFIG);
    }
}
