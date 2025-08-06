import { SketchCollector } from '../../sketchCollector';

export class GazDeBordeauxCollector extends SketchCollector {

    static CONFIG = {
        id: "gazdebordeaux",
        name: "Gaz de Bordeaux",
        description: "i18n.collectors.gazdebordeaux.description",
        version: "0",
        website: "https://gazdebordeaux.fr",
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
        }
    }

    constructor() {
        super(GazDeBordeauxCollector.CONFIG);
    }
}
