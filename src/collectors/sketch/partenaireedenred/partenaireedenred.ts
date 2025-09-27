
import { SketchCollector } from '../../sketchCollector';

export class PartenaireedenredCollector extends SketchCollector {

    static CONFIG = {
        id: "partenaireedenred",
        name: "PartenaireEdenred",
        description: "i18n.collectors.partenaireedenred.description",
        version: "0",
        website: "https://partenaire.edenred.fr/s/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/807185.jpg",
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
        entryUrl: "https://partenaire.edenred.fr/s/connexion",
    }

    constructor() {
        super(PartenaireedenredCollector.CONFIG);
    }
}
