
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LaPiscineParisCollector extends SketchCollector {

    static CONFIG = {
        id: "la_piscine_paris",
        name: "la piscine paris",
        description: "i18n.collectors.la_piscine_paris.description",
        version: "0",
        website: "https://www.lapiscine-paris.fr/entrercompte?back=my-account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124012.jpg",
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
        entryUrl: "https://www.lapiscine-paris.fr/entrercompte?back=my-account",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LaPiscineParisCollector.CONFIG);
    }
}
