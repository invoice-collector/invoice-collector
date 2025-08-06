import { SketchCollector } from '../../sketchCollector';

export class VistaPrintCollector extends SketchCollector {

    static CONFIG = {
        id: "vistaprint",
        name: "Vistaprint",
        description: "i18n.collectors.vistaprint.description",
        version: "0",
        website: "https://vistaprint.com",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/5c/Vistaprint_logo.svg",
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
        super(VistaPrintCollector.CONFIG);
    }
}
