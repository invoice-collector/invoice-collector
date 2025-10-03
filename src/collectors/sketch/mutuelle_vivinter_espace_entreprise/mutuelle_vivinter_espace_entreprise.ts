
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MutuelleVivinterEspaceEntrepriseCollector extends SketchCollector {

    static CONFIG = {
        id: "mutuelle_vivinter_espace_entreprise",
        name: "Mutuelle Vivinter - Espace Entreprise",
        description: "i18n.collectors.mutuelle_vivinter_espace_entreprise.description",
        version: "0",
        website: "https://www.psf-services.com/index_entreprise_vivinter.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130685.jpg",
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
        entryUrl: "https://www.psf-services.com/index_entreprise_vivinter.php",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MutuelleVivinterEspaceEntrepriseCollector.CONFIG);
    }
}
