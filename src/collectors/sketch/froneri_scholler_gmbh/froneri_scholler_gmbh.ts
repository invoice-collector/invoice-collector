
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FroneriSchollerGmbhCollector extends SketchCollector {

    static CONFIG = {
        id: "froneri_scholler_gmbh",
        name: "FRONERI Scholler GmbH",
        description: "i18n.collectors.froneri_scholler_gmbh.description",
        version: "0",
        website: "https://www.froneri-schoeller.de/mein-schoeller/meine-bestellungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/503986.jpg",
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
        entryUrl: "https://www.froneri-schoeller.de/mein-schoeller/meine-bestellungen",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FroneriSchollerGmbhCollector.CONFIG);
    }
}
