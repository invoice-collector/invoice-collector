
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CenpacCollector extends SketchCollector {

    static CONFIG = {
        id: "cenpac",
        name: "Cenpac",
        description: "i18n.collectors.cenpac.description",
        version: "0",
        website: "https://www.cenpac.fr/espace-client/mes-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4446985.jpg",
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
        entryUrl: "https://www.cenpac.fr/espace-client/mes-commandes",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CenpacCollector.CONFIG);
    }
}
