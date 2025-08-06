import { SketchCollector } from '../../sketchCollector';

export class UrssafCollector extends SketchCollector {

    static CONFIG = {
        id: "urssaf",
        name: "URSAFF",
        description: "i18n.collectors.urssaf.description",
        version: "0",
        website: "https://urssaf.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/3/32/URSSAF_Logo.svg",
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
        super(UrssafCollector.CONFIG);
    }
}
