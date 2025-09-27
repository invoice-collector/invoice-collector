import { SketchCollector } from '../../sketchCollector';

export class CastoramaCollector extends SketchCollector {

    static CONFIG = {
        id: "castorama",
        name: "Castorama",
        description: "i18n.collectors.castorama.description",
        version: "0",
        website: "https://castorama.fr",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Castorama_Logo.svg",
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
        entryUrl: "https://www.castorama.fr/customer/signin"
    }

    constructor() {
        super(CastoramaCollector.CONFIG);
    }
}
