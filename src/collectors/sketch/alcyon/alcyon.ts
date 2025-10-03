
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlcyonCollector extends SketchCollector {

    static CONFIG = {
        id: "alcyon",
        name: "Alcyon",
        description: "i18n.collectors.alcyon.description",
        version: "0",
        website: "https://www.alcyon.com/accueil/piloter/comptabilite/factures/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356138.jpg",
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
        entryUrl: "https://www.alcyon.com/accueil/piloter/comptabilite/factures/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlcyonCollector.CONFIG);
    }
}
