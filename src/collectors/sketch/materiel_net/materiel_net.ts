
import { SketchCollector } from '../../sketchCollector';

export class MaterielNetCollector extends SketchCollector {

    static CONFIG = {
        id: "materiel_net",
        name: "Materiel.net",
        description: "i18n.collectors.materiel_net.description",
        version: "0",
        website: "https://www.materiel.net/pm/client/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27330.jpg",
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
        entryUrl: "https://www.materiel.net/pm/client/login.html",
    }

    constructor() {
        super(MaterielNetCollector.CONFIG);
    }
}
