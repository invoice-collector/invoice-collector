
import { SketchCollector } from '../../sketchCollector';

export class GazDeBordeauxCollector extends SketchCollector {

    static CONFIG = {
        id: "gaz_de_bordeaux",
        name: "Gaz de Bordeaux",
        description: "i18n.collectors.gaz_de_bordeaux.description",
        version: "0",
        website: "http://www.gazdebordeaux.fr",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-clwMMGyCf1s8ZlvnIvX6eyjfq98zWKyMQ&s",
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
        entryUrl: "http://www.gazdebordeaux.fr",
    }

    constructor() {
        super(GazDeBordeauxCollector.CONFIG);
    }
}
