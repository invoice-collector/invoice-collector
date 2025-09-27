
import { SketchCollector } from '../../sketchCollector';

export class HaasCollector extends SketchCollector {

    static CONFIG = {
        id: "haas",
        name: "Haas",
        description: "i18n.collectors.haas.description",
        version: "0",
        website: "https://seminare.haas-wir-steuern.de/Account/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240045.jpg",
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
        entryUrl: "https://seminare.haas-wir-steuern.de/Account/Login",
    }

    constructor() {
        super(HaasCollector.CONFIG);
    }
}
