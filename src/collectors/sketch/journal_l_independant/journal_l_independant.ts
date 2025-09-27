
import { SketchCollector } from '../../sketchCollector';

export class JournalLIndependantCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_l_independant",
        name: "Journal L\'independant",
        description: "i18n.collectors.journal_l_independant.description",
        version: "0",
        website: "https://abonnement.lindependant.fr/site/lindependantv2/default/fr/compte3/mes-factures.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4480032.jpg",
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
        entryUrl: "https://abonnement.lindependant.fr/site/lindependantv2/default/fr/compte3/mes-factures.html",
    }

    constructor() {
        super(JournalLIndependantCollector.CONFIG);
    }
}
