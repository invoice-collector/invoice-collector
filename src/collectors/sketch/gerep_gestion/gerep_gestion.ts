
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GerepGestionCollector extends SketchCollector {

    static CONFIG = {
        id: "gerep_gestion",
        name: "GEREP Gestion",
        description: "i18n.collectors.gerep_gestion.description",
        version: "0",
        website: "https://services.gerep.fr/particuliers",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/106536.jpg",
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
        entryUrl: "https://services.gerep.fr/particuliers",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GerepGestionCollector.CONFIG);
    }
}
