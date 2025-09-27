import { SketchCollector } from '../../sketchCollector';

export class FreeProCollector extends SketchCollector {

    static CONFIG = {
        id: "free_pro",
        name: "Free Pro",
        description: "i18n.collectors.free.description",
        version: "0",
        website: "https://pro.free.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Free-pro.svg",
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
        entryUrl: "https://pro.free.fr/espace-client/connexion/#/",
    }

    constructor() {
        super(FreeProCollector.CONFIG);
    }
}
