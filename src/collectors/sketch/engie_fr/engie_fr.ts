import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EngieFrCollector extends SketchCollector {

    static CONFIG = {
        id: "engie_fr",
        name: "Engie Particuliers (.fr)",
        description: "i18n.collectors.engie.description",
        version: "0",
        website: "https://engie.fr",
        logo: "https://upload.wikimedia.org/wikipedia/fr/5/5c/Engie_logo.svg",
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
        entryUrl: "https://particuliers.engie.fr/login-page/authentification.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EngieFrCollector.CONFIG);
    }
}
