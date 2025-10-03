
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChronotruckCollector extends SketchCollector {

    static CONFIG = {
        id: "chronotruck",
        name: "Chronotruck",
        description: "i18n.collectors.chronotruck.description",
        version: "0",
        website: "https://www.chronotruck.com/fr_FR/connexion",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/45059.jpg",
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
        entryUrl: "https://www.chronotruck.com/fr_FR/connexion",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChronotruckCollector.CONFIG);
    }
}
