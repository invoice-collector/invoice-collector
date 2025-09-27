
import { SketchCollector } from '../../sketchCollector';

export class LaMaisonDuWhiskyCollector extends SketchCollector {

    static CONFIG = {
        id: "la_maison_du_whisky",
        name: "La Maison du Whisky",
        description: "i18n.collectors.la_maison_du_whisky.description",
        version: "0",
        website: "https://www.whisky.fr/en/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/121356.jpg",
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
        entryUrl: "https://www.whisky.fr/en/",
    }

    constructor() {
        super(LaMaisonDuWhiskyCollector.CONFIG);
    }
}
