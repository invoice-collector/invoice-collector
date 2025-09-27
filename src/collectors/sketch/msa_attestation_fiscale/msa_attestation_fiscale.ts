
import { SketchCollector } from '../../sketchCollector';

export class MsaAttestationFiscaleCollector extends SketchCollector {

    static CONFIG = {
        id: "msa_attestation_fiscale",
        name: "MSA (Attestation fiscale)",
        description: "i18n.collectors.msa_attestation_fiscale.description",
        version: "0",
        website: "https://monespaceprive.msa.fr/lfy/web/msa-mayenne-orne-sarthe/attestation-fiscale1?modalId=2",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/126044.jpg",
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
        entryUrl: "https://monespaceprive.msa.fr/lfy/web/msa-mayenne-orne-sarthe/attestation-fiscale1?modalId=2",
    }

    constructor() {
        super(MsaAttestationFiscaleCollector.CONFIG);
    }
}
