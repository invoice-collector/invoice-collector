import { SketchCollector } from '../../sketchCollector';

export class EndesaCollector extends SketchCollector {

    static CONFIG = {
        id: "endesa",
        name: "Endesa",
        description: "i18n.collectors.endesa.description",
        version: "0",
        website: "https://endesa.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Endesa.svg",
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
        entryUrl: "https://www.portail-endesa.fr/",
    }

    constructor() {
        super(EndesaCollector.CONFIG);
    }
}
