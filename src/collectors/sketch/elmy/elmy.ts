
import { SketchCollector } from '../../sketchCollector';

export class ElmyCollector extends SketchCollector {

    static CONFIG = {
        id: "elmy",
        name: "Elmy",
        description: "i18n.collectors.elmy.description",
        version: "0",
        website: "https://espace-pro.elmy.fr/accueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4375759.jpg",
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
        entryUrl: "https://espace-pro.elmy.fr/accueil",
    }

    constructor() {
        super(ElmyCollector.CONFIG);
    }
}
