import { SketchCollector } from '../../sketchCollector';

export class DalkiaCollector extends SketchCollector {

    static CONFIG = {
        id: "dalkia",
        name: "Dalkia",
        description: "i18n.collectors.dalkia.description",
        version: "0",
        website: "https://dalkia.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Logo_Dalkia.svg",
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
        entryUrl: "https://espace-clients.dalkia.fr/",
    }

    constructor() {
        super(DalkiaCollector.CONFIG);
    }
}
