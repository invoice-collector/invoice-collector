
import { SketchCollector } from '../../sketchCollector';

export class BoulangerCollector extends SketchCollector {

    static CONFIG = {
        id: "boulanger",
        name: "Boulanger",
        description: "i18n.collectors.boulanger.description",
        version: "0",
        website: "https://www.boulanger.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/4/46/Logo_Boulanger_2004.svg",
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
        entryUrl: "https://www.boulanger.com/account/home",
    }

    constructor() {
        super(BoulangerCollector.CONFIG);
    }
}
