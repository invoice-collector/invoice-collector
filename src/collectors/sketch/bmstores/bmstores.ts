import { SketchCollector } from '../../sketchCollector';

export class BMStoresCollector extends SketchCollector {

    static CONFIG = {
        id: "bmstores",
        name: "B&M",
        description: "i18n.collectors.bmstores.description",
        version: "0",
        website: "https://bmstores.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Logo_AvecFond_RVB.jpg",
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
        entryUrl: "https://bmstores.fr/connexion?back=my-account",
    }

    constructor() {
        super(BMStoresCollector.CONFIG);
    }
}
