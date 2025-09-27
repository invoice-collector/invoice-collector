import { SketchCollector } from '../../sketchCollector';

export class GennevilliersEnergiesCollector extends SketchCollector {

    static CONFIG = {
        id: "gennevilliers_energies",
        name: "Gennevilliers Energies",
        description: "i18n.collectors.gennevilliers_energies.description",
        version: "0",
        website: "https://www.ville-gennevilliers.fr/94-27063/cadre-de-vie/economie-et-commerces/annuaire-des-entreprises/ficheAnnu/gennevilliers-energie.htm",
        logo: "https://www.rezomee.fr/images/2021-06-25-09-28-51_9416287.png",
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
        entryUrl: "https://www.ville-gennevilliers.fr/94-27063/cadre-de-vie/economie-et-commerces/annuaire-des-entreprises/ficheAnnu/gennevilliers-energie.htm",
    }

    constructor() {
        super(GennevilliersEnergiesCollector.CONFIG);
    }
}
