import { SketchCollector } from '../../sketchCollector';

export class WeldomFrCollector extends SketchCollector {

    static CONFIG = {
        id: "weldomfr",
        name: "Weldom",
        description: "i18n.collectors.weldomfr.description",
        version: "0",
        website: "https://weldom.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/0/09/Logo_Weldom_2012.svg",
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
        super(WeldomFrCollector.CONFIG);
    }
}
