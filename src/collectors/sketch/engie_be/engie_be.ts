import { SketchCollector } from '../../sketchCollector';

export class EngieBeCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_be",
        name: "Engie BE",
        description: "i18n.collectors.engie.description",
        version: "0",
        website: "https://engie.be",
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/5c/Engie_logo.svg",
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
        entryUrl: "https://account.engie.be/u/login",
    }

    constructor() {
        super(EngieBeCollector.CONFIG);
    }
}
