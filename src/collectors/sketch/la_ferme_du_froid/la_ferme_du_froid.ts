
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaFermeDuFroidCollector extends SketchCollector {

    static CONFIG = {
        id: "la_ferme_du_froid",
        name: "La Ferme Du Froid",
        description: "i18n.collectors.la_ferme_du_froid.description",
        version: "0",
        website: "https://lafermedufroid.infologic.fr/#!/histcde",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4188985.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://lafermedufroid.infologic.fr/#!/histcde",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaFermeDuFroidCollector.CONFIG);
    }
}
