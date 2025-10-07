
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BonappEliorCollector extends SketchCollector {

    static CONFIG = {
        id: "bonapp_elior",
        name: "BonApp - Elior",
        description: "i18n.collectors.bonapp_elior.description",
        version: "0",
        website: "https://bonapp.elior.com/connexion?returnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/105773.jpg",
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
        entryUrl: "https://bonapp.elior.com/connexion?returnUrl=%2F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BonappEliorCollector.CONFIG);
    }
}
