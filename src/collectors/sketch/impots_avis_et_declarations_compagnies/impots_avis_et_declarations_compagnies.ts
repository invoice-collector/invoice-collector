
import { SketchCollector } from '../../sketchCollector';

export class ImpotsAvisEtDeclarationsCompagniesCollector extends SketchCollector {

    static CONFIG = {
        id: "impots_avis_et_declarations_compagnies",
        name: "Impots - Avis et declarations - compagnies",
        description: "i18n.collectors.impots_avis_et_declarations_compagnies.description",
        version: "0",
        website: "https://cfspro.impots.gouv.fr/LoginAccess?op=c&url=aHR0cHM6Ly9jZnNwcm8uaW1wb3RzLmdvdXYuZnIvbWlyZS9hY2N1ZWlsLmRv",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105877.jpg",
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
        entryUrl: "https://cfspro.impots.gouv.fr/LoginAccess?op=c&url=aHR0cHM6Ly9jZnNwcm8uaW1wb3RzLmdvdXYuZnIvbWlyZS9hY2N1ZWlsLmRv",
    }

    constructor() {
        super(ImpotsAvisEtDeclarationsCompagniesCollector.CONFIG);
    }
}
