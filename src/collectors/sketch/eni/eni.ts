import { SketchCollector } from '../../sketchCollector';

export class EniCollector extends SketchCollector {

    static CONFIG = {
        id: "eni",
        name: "Eni",
        description: "i18n.collectors.eni.description",
        version: "0",
        website: "https://eni.com",
        logo: "https://upload.wikimedia.org/wikipedia/fr/b/b8/Eni_SpA_%28logo%29.svg",
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
        super(EniCollector.CONFIG);
    }
}
