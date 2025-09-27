
import { SketchCollector } from '../../sketchCollector';

export class AxxesCollector extends SketchCollector {

    static CONFIG = {
        id: "axxes",
        name: "AXXES",
        description: "i18n.collectors.axxes.description",
        version: "0",
        website: "https://www.axxes.fr/fr/identification/authentification.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/751046.jpg",
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
        entryUrl: "https://www.axxes.fr/fr/identification/authentification.html",
    }

    constructor() {
        super(AxxesCollector.CONFIG);
    }
}
