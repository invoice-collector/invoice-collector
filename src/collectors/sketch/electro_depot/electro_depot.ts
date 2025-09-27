
import { SketchCollector } from '../../sketchCollector';

export class ElectroDepotCollector extends SketchCollector {

    static CONFIG = {
        id: "electro_depot",
        name: "Electro Depot",
        description: "i18n.collectors.electro_depot.description",
        version: "0",
        website: "https://electrodepot.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/b/b7/Logo_d%27%C3%89lectro_d%C3%A9p%C3%B4t.svg",
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
        entryUrl: "http://erreur.electrodepot.pictime.fr/",
    }

    constructor() {
        super(ElectroDepotCollector.CONFIG);
    }
}
