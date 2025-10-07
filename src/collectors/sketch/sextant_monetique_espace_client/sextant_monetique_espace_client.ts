
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SextantMonetiqueEspaceClientCollector extends SketchCollector {

    static CONFIG = {
        id: "sextant_monetique_espace_client",
        name: "Sextant Monetique - Espace Client",
        description: "i18n.collectors.sextant_monetique_espace_client.description",
        version: "0",
        website: "https://espace-clients.sextant-monetique.fr/index.php?module=pages&page=ListeFactures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639887.jpg",
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
        entryUrl: "https://espace-clients.sextant-monetique.fr/index.php?module=pages&page=ListeFactures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SextantMonetiqueEspaceClientCollector.CONFIG);
    }
}
