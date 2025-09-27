
import { SketchCollector } from '../../sketchCollector';

export class MsaPrestationsFamilialesEtLogementCollector extends SketchCollector {

    static CONFIG = {
        id: "msa_prestations_familiales_et_logement",
        name: "MSA (Prestations familiales et logement)",
        description: "i18n.collectors.msa_prestations_familiales_et_logement.description",
        version: "0",
        website: "https://monespaceprive.msa.fr/lfy/web/msa/famille/prestations-familiales?modalId=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126047.jpg",
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
        entryUrl: "https://monespaceprive.msa.fr/lfy/web/msa/famille/prestations-familiales?modalId=2",
    }

    constructor() {
        super(MsaPrestationsFamilialesEtLogementCollector.CONFIG);
    }
}
