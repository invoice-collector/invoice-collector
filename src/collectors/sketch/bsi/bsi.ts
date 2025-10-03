
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BsiCollector extends SketchCollector {

    static CONFIG = {
        id: "bsi",
        name: "BSI",
        description: "i18n.collectors.bsi.description",
        version: "0",
        website: "https://portail-groupe-sequences.artis.fr/ArtisWebBsi/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=1Acv5ijjkTIaRZO9&typeLicence=BSI",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1287677.jpg",
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
        entryUrl: "https://portail-groupe-sequences.artis.fr/ArtisWebBsi/portail/ventes/factures/entree.action?cKey=1&cStatus=P&session=1Acv5ijjkTIaRZO9&typeLicence=BSI",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BsiCollector.CONFIG);
    }
}
