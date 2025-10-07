
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MetEnergieCollector extends SketchCollector {

    static CONFIG = {
        id: "met_energie",
        name: "MET Energie",
        description: "i18n.collectors.met_energie.description",
        version: "0",
        website: "https://espace-client.fr.met.com/client/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564073.jpg",
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
        entryUrl: "https://espace-client.fr.met.com/client/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MetEnergieCollector.CONFIG);
    }
}
