import { SketchCollector } from '../../sketchCollector';

export class AviaFranceCollector extends SketchCollector {

    static CONFIG = {
        id: "aviafrance",
        name: "Aviafrance",
        description: "i18n.collectors.aviafrance.description",
        version: "0",
        website: "https://avia-france.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/AVIA_International_logo.svg",
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
        super(AviaFranceCollector.CONFIG);
    }
}
