import { SketchCollector } from '../../sketchCollector';

export class LaPosteMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "lapostemobile",
        name: "La poste mobile",
        description: "i18n.collectors.lapostemobile.description",
        version: "0",
        website: "https://lapostemobile.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/8/80/LaPosteMobile-2025.svg",
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
        super(LaPosteMobileCollector.CONFIG);
    }
}
