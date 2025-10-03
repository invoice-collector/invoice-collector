
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BouyguesTelecomCollector extends SketchCollector {

    static CONFIG = {
        id: "bouygues_telecom",
        name: "Bouygues Telecom",
        description: "i18n.collectors.bouygues_telecom.description",
        version: "0",
        website: "https://www.bouyguestelecom.fr/mon-compte/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9042.jpg",
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
        entryUrl: "https://www.bouyguestelecom.fr/mon-compte/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BouyguesTelecomCollector.CONFIG);
    }
}
