import { SketchCollector } from '../../sketchCollector';

export class VilleGennevilliersCollector extends SketchCollector {

    static CONFIG = {
        id: "villegennevilliers",
        name: "Ville de Gennevilliers",
        description: "i18n.collectors.villegennevilliers.description",
        version: "0",
        website: "https://ville-gennevilliers.fr",
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
        }
    }

    constructor() {
        super(VilleGennevilliersCollector.CONFIG);
    }
}
