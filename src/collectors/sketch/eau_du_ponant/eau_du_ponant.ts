
import { SketchCollector } from '../../sketchCollector';

export class EauDuPonantCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_du_ponant",
        name: "Eau du Ponant",
        description: "i18n.collectors.eau_du_ponant.description",
        version: "0",
        website: "https://espace-abonne.eauduponant.fr//#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27351.jpg",
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
        entryUrl: "https://espace-abonne.eauduponant.fr//#/login",
    }

    constructor() {
        super(EauDuPonantCollector.CONFIG);
    }
}
