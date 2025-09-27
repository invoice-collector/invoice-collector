import { SketchCollector } from '../../sketchCollector';

export class EngieFrCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_fr",
        name: "Engie FR",
        description: "i18n.collectors.engie.description",
        version: "0",
        website: "https://engie.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/5c/Engie_logo.svg",
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
        super(EngieCollector.CONFIG);
    }
}
