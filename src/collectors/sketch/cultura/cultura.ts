import { SketchCollector } from '../../sketchCollector';

export class CulturaCollector extends SketchCollector {

    static CONFIG = {
        id: "cultura",
        name: "Cultura",
        description: "i18n.collectors.cultura.description",
        version: "0",
        website: "https://cultura.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/56/Cultura_Logo_2021.svg",
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
        entryUrl: "https://www.cultura.com/"
    }

    constructor() {
        super(CulturaCollector.CONFIG);
    }
}
