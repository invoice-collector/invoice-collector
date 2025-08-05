import { SketchCollector } from '../../sketchCollector';

export class EdfCollector extends SketchCollector {

    static CONFIG = {
        id: "edf",
        name: "Électricité de France (EDF)",
        description: "i18n.collectors.edf.description",
        version: "1",
        website: "https://www.edf.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/%C3%89lectricit%C3%A9_de_France_logo.svg",
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
        super(EdfCollector.CONFIG);
    }
}
