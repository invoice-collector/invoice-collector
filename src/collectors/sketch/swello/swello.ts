
import { SketchCollector } from '../../sketchCollector';

export class SwelloCollector extends SketchCollector {

    static CONFIG = {
        id: "swello",
        name: "Swello",
        description: "i18n.collectors.swello.description",
        version: "0",
        website: "https://swello.com/fr/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090209.jpg",
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
        entryUrl: "https://swello.com/fr/connexion",
    }

    constructor() {
        super(SwelloCollector.CONFIG);
    }
}
