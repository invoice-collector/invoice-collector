import { SketchCollector } from '../../sketchCollector';

export class PaulCollector extends SketchCollector {

    static CONFIG = {
        id: "paul",
        name: "Paul",
        description: "i18n.collectors.paul.description",
        version: "0",
        website: "https://paul.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Paul.png",
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
        super(PaulCollector.CONFIG);
    }
}
