import { SketchCollector } from '../../sketchCollector';

export class SchindlerCollector extends SketchCollector {

    static CONFIG = {
        id: "schindler",
        name: "Schindler",
        description: "i18n.collectors.schindler.description",
        version: "0",
        website: "https://group.schindler.com",
        logo: "https://upload.wikimedia.org/wikipedia/de/0/04/Schindlerlogo.svg",
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
        super(SchindlerCollector.CONFIG);
    }
}
