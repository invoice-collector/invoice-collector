
import { SketchCollector } from '../../sketchCollector';

export class LaCipavCollector extends SketchCollector {

    static CONFIG = {
        id: "la_cipav",
        name: "La CIPAV",
        description: "i18n.collectors.la_cipav.description",
        version: "0",
        website: "https://espace-personnel.lacipav.fr/#/connexion/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105788.jpg",
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
        entryUrl: "https://espace-personnel.lacipav.fr/#/connexion/",
    }

    constructor() {
        super(LaCipavCollector.CONFIG);
    }
}
