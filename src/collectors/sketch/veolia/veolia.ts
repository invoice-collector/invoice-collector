import { SketchCollector } from '../../sketchCollector';

export class VeoliaCollector extends SketchCollector {

    static CONFIG = {
        id: "veolia",
        name: "Veolia",
        description: "i18n.collectors.veolia.description",
        version: "0",
        website: "https://veolia.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Veolia_logo.svg",
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
        super(VeoliaCollector.CONFIG);
    }
}
