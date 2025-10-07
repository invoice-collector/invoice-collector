
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SchuheGuenstigDeCollector extends SketchCollector {

    static CONFIG = {
        id: "schuhe_guenstig_de",
        name: "schuhe-guenstig.de",
        description: "i18n.collectors.schuhe_guenstig_de.description",
        version: "0",
        website: "https://www.schuhe-guenstig.de/mein-konto",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1645391.jpg",
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
        entryUrl: "https://www.schuhe-guenstig.de/mein-konto",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SchuheGuenstigDeCollector.CONFIG);
    }
}
