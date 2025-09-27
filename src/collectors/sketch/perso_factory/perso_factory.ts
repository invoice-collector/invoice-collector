
import { SketchCollector } from '../../sketchCollector';

export class PersoFactoryCollector extends SketchCollector {

    static CONFIG = {
        id: "perso_factory",
        name: "Perso factory",
        description: "i18n.collectors.perso_factory.description",
        version: "0",
        website: "https://www.persofactory.com/historique-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4193710.jpg",
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
        entryUrl: "https://www.persofactory.com/historique-commandes",
    }

    constructor() {
        super(PersoFactoryCollector.CONFIG);
    }
}
