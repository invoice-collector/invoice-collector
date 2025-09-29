import { SketchCollector } from '../../sketchCollector';

export class MonoprixCollector extends SketchCollector {

    static CONFIG = {
        id: "monoprix",
        name: "Monoprix",
        description: "i18n.collectors.monoprix.description",
        version: "0",
        website: "https://monoprix.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Monoprix_logo.svg",
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
        super(MonoprixCollector.CONFIG);
    }
}
