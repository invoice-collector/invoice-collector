
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GrosbillCollector extends SketchCollector {

    static CONFIG = {
        id: "grosbill",
        name: "GrosBill",
        description: "i18n.collectors.grosbill.description",
        version: "0",
        website: "https://www.grosbill.com/comptev2/index.php?redirection=compte_accueil",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27343.jpg",
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
        entryUrl: "https://www.grosbill.com/comptev2/index.php?redirection=compte_accueil",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GrosbillCollector.CONFIG);
    }
}
