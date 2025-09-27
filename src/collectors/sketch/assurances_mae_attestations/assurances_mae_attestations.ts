
import { SketchCollector } from '../../sketchCollector';

export class AssurancesMaeAttestationsCollector extends SketchCollector {

    static CONFIG = {
        id: "assurances_mae_attestations",
        name: "Assurances MAE (attestations)",
        description: "i18n.collectors.assurances_mae_attestations.description",
        version: "0",
        website: "https://www.mae.fr/espaceadherent",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105261.jpg",
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
        entryUrl: "https://www.mae.fr/espaceadherent",
    }

    constructor() {
        super(AssurancesMaeAttestationsCollector.CONFIG);
    }
}
