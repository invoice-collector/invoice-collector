
import { SketchCollector } from '../../sketchCollector';

export class LEauDIleDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "l_eau_d_ile_de_france",
        name: "L\'eau d\'Ile de France",
        description: "i18n.collectors.l_eau_d_ile_de_france.description",
        version: "0",
        website: "https://connexion.leaudiledefrance.fr/espace-bailleurs-syndics",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4220149.jpg",
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
        entryUrl: "https://connexion.leaudiledefrance.fr/espace-bailleurs-syndics",
    }

    constructor() {
        super(LEauDIleDeFranceCollector.CONFIG);
    }
}
