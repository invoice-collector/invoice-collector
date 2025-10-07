
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MsaPaiementsMaladieCollector extends SketchCollector {

    static CONFIG = {
        id: "msa_paiements_maladie",
        name: "MSA (Paiements maladie)",
        description: "i18n.collectors.msa_paiements_maladie.description",
        version: "0",
        website: "https://monespaceprive.msa.fr/lfy/web/msa/sante/arret-travail-maladie?modalId=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126045.jpg",
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
        entryUrl: "https://monespaceprive.msa.fr/lfy/web/msa/sante/arret-travail-maladie?modalId=2",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MsaPaiementsMaladieCollector.CONFIG);
    }
}
