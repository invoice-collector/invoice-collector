import { SketchCollector } from '../../sketchCollector';

export class BricomanCollector extends SketchCollector {

    static CONFIG = {
        id: "bricoman",
        name: "Bricoman",
        description: "i18n.collectors.bricoman.description",
        version: "0",
        website: "https://bricoman.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/2/24/Logo_Bricoman.svg",
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
        super(BricomanCollector.CONFIG);
    }
}
