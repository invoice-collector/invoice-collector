
import { SketchCollector } from '../../sketchCollector';

export class Tele2NlCollector extends SketchCollector {

    static CONFIG = {
        id: "tele2_nl",
        name: "Tele2.nl",
        description: "i18n.collectors.tele2_nl.description",
        version: "0",
        website: "https://www.tele2.nl/mijn-tele2/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9474.jpg",
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
        entryUrl: "https://www.tele2.nl/mijn-tele2/",
    }

    constructor() {
        super(Tele2NlCollector.CONFIG);
    }
}
