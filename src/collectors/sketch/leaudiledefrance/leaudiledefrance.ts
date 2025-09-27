
import { SketchCollector } from '../../sketchCollector';

export class LeauDileDeFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "leaudiledefrance",
        name: "L'eau d'Île-de-France",
        description: "i18n.collectors.leaudiledefrance.description",
        version: "0",
        website: "https://www.leaudiledefrance.fr/",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc6asmbkt0q9fF-5f1yZmyK_EOb-CIesBnHA&s",
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
        entryUrl: "https://connexion.leaudiledefrance.fr/s/login/",
    }

    constructor() {
        super(LeauDileDeFranceCollector.CONFIG);
    }
}
