
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KlesiaEspaceRetraiteParticulierCollector extends SketchCollector {

    static CONFIG = {
        id: "klesia_espace_retraite_particulier",
        name: "Klesia - Espace retraite - particulier",
        description: "i18n.collectors.klesia_espace_retraite_particulier.description",
        version: "0",
        website: "https://particuliers.klesia.fr/web/particuliers/espace-client",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/125675.jpg",
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
        entryUrl: "https://particuliers.klesia.fr/web/particuliers/espace-client",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KlesiaEspaceRetraiteParticulierCollector.CONFIG);
    }
}
