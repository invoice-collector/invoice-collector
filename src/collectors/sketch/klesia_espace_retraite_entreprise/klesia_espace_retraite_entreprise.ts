
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlesiaEspaceRetraiteEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "klesia_espace_retraite_entreprise",
        name: "Klesia - Espace retraite - Entreprise",
        description: "i18n.collectors.klesia_espace_retraite_entreprise.description",
        version: "0",
        website: "https://particuliers.klesia.fr/web/professionnels/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125674.jpg",
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
        entryUrl: "https://particuliers.klesia.fr/web/professionnels/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlesiaEspaceRetraiteEntrepriseCollector.CONFIG);
    }
}
