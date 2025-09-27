
import { SketchCollector } from '../../sketchCollector';

export class CarrefourCarteDeFideliteCollector extends SketchCollector {

    static CONFIG = {
        id: "carrefour_carte_de_fidelite",
        name: "Carrefour - Carte de fidelite",
        description: "i18n.collectors.carrefour_carte_de_fidelite.description",
        version: "0",
        website: "https://moncompte.carrefour.fr/iam/XUI/#login/&realm=%2FCarrefourConnect&goto=http%3A%2F%2Fmoncompte.carrefour.fr%2Fiam%2Foauth2%2FCarrefourConnect%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3Dcarrefour_onecarrefour_web%26scope%3Dopenid%2520iam%2520re",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105790.jpg",
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
        entryUrl: "https://moncompte.carrefour.fr/iam/XUI/#login/&realm=%2FCarrefourConnect&goto=http%3A%2F%2Fmoncompte.carrefour.fr%2Fiam%2Foauth2%2FCarrefourConnect%2Fauthorize%3Fresponse_type%3Dcode%26client_id%3Dcarrefour_onecarrefour_web%26scope%3Dopenid%2520iam%2520re",
    }

    constructor() {
        super(CarrefourCarteDeFideliteCollector.CONFIG);
    }
}
