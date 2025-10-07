
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EauDuDunkerquoisCollector extends SketchCollector {

    static CONFIG = {
        id: "eau_du_dunkerquois",
        name: "eau du Dunkerquois",
        description: "i18n.collectors.eau_du_dunkerquois.description",
        version: "0",
        website: "https://www.eaux-dunkerque.fr/mon-compte-en-ligne/je-me-connecte",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/837737.jpg",
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
        entryUrl: "https://www.eaux-dunkerque.fr/mon-compte-en-ligne/je-me-connecte",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EauDuDunkerquoisCollector.CONFIG);
    }
}
