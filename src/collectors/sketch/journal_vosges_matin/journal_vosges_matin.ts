
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class JournalVosgesMatinCollector extends SketchCollector {

    static CONFIG = {
        id: "journal_vosges_matin",
        name: "Journal Vosges Matin",
        description: "i18n.collectors.journal_vosges_matin.description",
        version: "0",
        website: "https://c.vosgesmatin.fr/espace-client/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1471259.jpg",
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
        entryUrl: "https://c.vosgesmatin.fr/espace-client/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(JournalVosgesMatinCollector.CONFIG);
    }
}
