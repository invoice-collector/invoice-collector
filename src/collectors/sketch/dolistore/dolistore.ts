
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DolistoreCollector extends SketchCollector {

    static CONFIG = {
        id: "dolistore",
        name: "Dolistore",
        description: "i18n.collectors.dolistore.description",
        version: "0",
        website: "https://www.dolistore.com/fr/historique-des-commandes",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2556778.jpg",
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
        entryUrl: "https://www.dolistore.com/fr/historique-des-commandes",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DolistoreCollector.CONFIG);
    }
}
