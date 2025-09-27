
import { SketchCollector } from '../../sketchCollector';

export class EauDeParisCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_de_paris",
        name: "Eau de Paris",
        description: "i18n.collectors.eau_de_paris.description",
        version: "0",
        website: "https://eaudeparis.fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/749710.jpg",
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
        entryUrl: "https://eaudeparis.fr",
    }

    constructor() {
        super(EauDeParisCollector.CONFIG);
    }
}
