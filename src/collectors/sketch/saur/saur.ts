
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SaurCollector extends SketchCollector {

    static CONFIG = {
        id: "saur",
        name: "SAUR",
        description: "i18n.collectors.saur.description",
        version: "0",
        website: "https://mon-espace.saurclient.fr/#/fr/mes-paiements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/670850.jpg",
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
        entryUrl: "https://mon-espace.saurclient.fr/#/fr/mes-paiements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SaurCollector.CONFIG);
    }
}
