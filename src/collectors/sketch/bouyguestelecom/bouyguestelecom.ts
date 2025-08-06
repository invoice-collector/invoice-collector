import { SketchCollector } from '../../sketchCollector';

export class BouyguesTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "bouyguestelecom",
        name: "Bouygues Telecom",
        description: "i18n.collectors.bouyguestelecom.description",
        version: "0",
        website: "https://bouyguestelecom.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bouygues_Telecom_201x_logo.svg",
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
        super(BouyguesTelecomCollector.CONFIG);
    }
}
