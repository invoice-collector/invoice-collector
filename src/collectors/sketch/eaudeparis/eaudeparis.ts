import { SketchCollector } from '../../sketchCollector';

export class EauDeParisCollector extends SketchCollector {

    static CONFIG = {
        id: "eaudeparis",
        name: "Eau de Paris",
        description: "i18n.collectors.eaudeparis.description",
        version: "0",
        website: "https://eaudeparis.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/0/0b/Eau_de_Paris_bleu.svg",
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
        }
    }

    constructor() {
        super(EauDeParisCollector.CONFIG);
    }
}
