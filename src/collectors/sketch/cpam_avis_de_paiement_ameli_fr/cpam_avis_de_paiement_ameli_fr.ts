
import { SketchCollector } from '../../sketchCollector';

export class CpamAvisDePaiementAmeliFrCollector extends SketchCollector {

    static CONFIG = {
        id: "cpam_avis_de_paiement_ameli_fr",
        name: "CPAM (avis de paiement Ameli.fr)",
        description: "i18n.collectors.cpam_avis_de_paiement_ameli_fr.description",
        version: "0",
        website: "https://www.ameli.fr/assure/adresses-et-contacts/vos-paiements-vos-remboursements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/123797.jpg",
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
        entryUrl: "https://www.ameli.fr/assure/adresses-et-contacts/vos-paiements-vos-remboursements",
    }

    constructor() {
        super(CpamAvisDePaiementAmeliFrCollector.CONFIG);
    }
}
