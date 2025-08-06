import { SketchCollector } from '../../sketchCollector';

export class GifiCollector extends SketchCollector {

    static CONFIG = {
        id: "gifi",
        name: "Gifi",
        description: "i18n.collectors.gifi.description",
        version: "0",
        website: "https://gifi.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Logo_gifi_2020.png",
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
        super(GifiCollector.CONFIG);
    }
}
