
import { SketchCollector } from '../../sketchCollector';

export class ImpotsAvisEtDeclarationsCollector extends SketchCollector {

    static CONFIG = {
        id: "impots_avis_et_declarations",
        name: "Impots - Avis et declarations",
        description: "i18n.collectors.impots_avis_et_declarations.description",
        version: "0",
        website: "https://cfspart.impots.gouv.fr/LoginAccess?op=c&url=aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyLw==",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105876.jpg",
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
        entryUrl: "https://cfspart.impots.gouv.fr/LoginAccess?op=c&url=aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyLw==",
    }

    constructor() {
        super(ImpotsAvisEtDeclarationsCollector.CONFIG);
    }
}
