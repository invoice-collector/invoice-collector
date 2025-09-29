import { SketchCollector } from '../../sketchCollector';

export class HelloAssoCollector extends SketchCollector {

    static CONFIG = {
        id: "helloasso",
        name: "HelloAsso",
        description: "i18n.collectors.helloasso.description",
        version: "0",
        website: "https://helloasso.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/27/Logo-HelloAsso.svg",
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
        entryUrl: "https://auth.helloasso.com/connexion"
    }

    constructor() {
        super(HelloAssoCollector.CONFIG);
    }
}
