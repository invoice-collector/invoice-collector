
import { SketchCollector } from '../../sketchCollector';

export class BoldenCollector extends SketchCollector {

    static CONFIG = {
        id: "bolden",
        name: "Bolden",
        description: "i18n.collectors.bolden.description",
        version: "0",
        website: "https://bolden.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/640362.jpg",
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
        entryUrl: "https://bolden.fr/",
    }

    constructor() {
        super(BoldenCollector.CONFIG);
    }
}
