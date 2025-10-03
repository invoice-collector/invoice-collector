
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AlternaCollector extends SketchCollector {

    static CONFIG = {
        id: "alterna",
        name: "Alterna",
        description: "i18n.collectors.alterna.description",
        version: "0",
        website: "https://portail.alterna-energie.fr/mon-compte/mes-factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105702.jpg",
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
        entryUrl: "https://portail.alterna-energie.fr/mon-compte/mes-factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AlternaCollector.CONFIG);
    }
}
