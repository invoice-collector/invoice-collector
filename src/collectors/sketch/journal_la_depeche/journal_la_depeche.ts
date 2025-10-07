
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JournalLaDepecheCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_la_depeche",
        name: "Journal La Depeche",
        description: "i18n.collectors.journal_la_depeche.description",
        version: "0",
        website: "https://abonnement.ladepeche.fr/site/ladepeche/default/fr/compte2/factures.html?scrollto=content",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1468006.jpg",
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
        entryUrl: "https://abonnement.ladepeche.fr/site/ladepeche/default/fr/compte2/factures.html?scrollto=content",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JournalLaDepecheCollector.CONFIG);
    }
}
