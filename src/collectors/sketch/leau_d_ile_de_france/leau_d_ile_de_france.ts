
import { SketchCollector } from '../../sketchCollector';

export class LeauDIleDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "leau_d_ile_de_france",
        name: "Leau D\'ile-De-France",
        description: "i18n.collectors.leau_d_ile_de_france.description",
        version: "0",
        website: "https://connexion.leaudiledefrance.fr/s/login/?ec=302&startURL=%2Fs%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375762.jpg",
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
        entryUrl: "https://connexion.leaudiledefrance.fr/s/login/?ec=302&startURL=%2Fs%2F",
    }

    constructor() {
        super(LeauDIleDeFranceCollector.CONFIG);
    }
}
