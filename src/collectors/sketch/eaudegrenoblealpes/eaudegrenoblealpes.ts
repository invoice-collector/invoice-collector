import { SketchCollector } from '../../sketchCollector';

export class EauDeGrenobleAlpesCollector extends SketchCollector {

    static CONFIG = {
        id: "eaudegrenoblealpes",
        name: "Eau de Grenoble Alpes",
        description: "i18n.collectors.eaudegrenoblealpes.description",
        version: "0",
        website: "https://eau.grenoblealpesmetropole.fr",
        logo: "https://www.somei.fr/site2017/wp-content/uploads/2019/05/Sans-titre-1.jpg",
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
        entryUrl: "https://eau.grenoblealpesmetropole.fr/#/login",
    }

    constructor() {
        super(EauDeGrenobleAlpesCollector.CONFIG);
    }
}
