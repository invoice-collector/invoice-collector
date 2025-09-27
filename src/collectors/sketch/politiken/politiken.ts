
import { SketchCollector } from '../../sketchCollector';

export class PolitikenCollector extends SketchCollector {

    static CONFIG = {
        id: "politiken",
        name: "Politiken",
        description: "i18n.collectors.politiken.description",
        version: "0",
        website: "https://politiken.dk/minside/betaling/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4365220.jpg",
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
        entryUrl: "https://politiken.dk/minside/betaling/",
    }

    constructor() {
        super(PolitikenCollector.CONFIG);
    }
}
