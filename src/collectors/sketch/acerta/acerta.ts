import { SketchCollector } from '../../sketchCollector';

export class AcertaCollector extends SketchCollector {

    static CONFIG = {
        id: "acerta",
        name: "Acerta",
        description: "i18n.collectors.acerta.description",
        version: "0",
        website: "https://acerta.be",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/ACERTA_Logo.jpg",
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
        super(AcertaCollector.CONFIG);
    }
}
