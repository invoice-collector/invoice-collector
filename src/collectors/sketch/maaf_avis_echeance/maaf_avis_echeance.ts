
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaafAvisEcheanceCollector extends SketchCollector {

    static CONFIG = {
        id: "maaf_avis_echeance",
        name: "MAAF (avis echeance)",
        description: "i18n.collectors.maaf_avis_echeance.description",
        version: "0",
        website: "https://www.maaf.fr/assurances/fr/d_16103/maaf-vie",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107150.jpg",
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
        entryUrl: "https://www.maaf.fr/assurances/fr/d_16103/maaf-vie",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaafAvisEcheanceCollector.CONFIG);
    }
}
