
import { SketchCollector } from '../../sketchCollector';

export class EmbaleoCollector extends SketchCollector {

    static CONFIG = {
        id: "embaleo",
        name: "Embaleo",
        description: "i18n.collectors.embaleo.description",
        version: "0",
        website: "https://www.embaleo.com/historique-des-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2012171.jpg",
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
        entryUrl: "https://www.embaleo.com/historique-des-commandes",
    }

    constructor() {
        super(EmbaleoCollector.CONFIG);
    }
}
