
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChronopostPreuveDeLivraisonCollector extends SketchCollector {

    static CONFIG = {
        id: "chronopost_preuve_de_livraison",
        name: "Chronopost - Preuve de livraison",
        description: "i18n.collectors.chronopost_preuve_de_livraison.description",
        version: "0",
        website: "https://www.chronopost.fr/fr/aide/faq/livraison-de-vos-envois/comment-obtenir-la-preuve-de-livraison-de-mon-colis",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105806.jpg",
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
        entryUrl: "https://www.chronopost.fr/fr/aide/faq/livraison-de-vos-envois/comment-obtenir-la-preuve-de-livraison-de-mon-colis",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChronopostPreuveDeLivraisonCollector.CONFIG);
    }
}
