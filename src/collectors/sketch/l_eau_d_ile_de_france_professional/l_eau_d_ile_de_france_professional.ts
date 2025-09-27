
import { SketchCollector } from '../../sketchCollector';

export class LEauDIleDeFranceProfessionalCollector extends SketchCollector {

    static CONFIG = {
        id: "l_eau_d_ile_de_france_professional",
        name: "L\'eau D\'ile-De-France - Professional",
        description: "i18n.collectors.l_eau_d_ile_de_france_professional.description",
        version: "0",
        website: "https://connexion.leaudiledefrance.fr/espace-professionnels/s/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4487300.jpg",
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
        entryUrl: "https://connexion.leaudiledefrance.fr/espace-professionnels/s/factures",
    }

    constructor() {
        super(LEauDIleDeFranceProfessionalCollector.CONFIG);
    }
}
