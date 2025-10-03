
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LubeckerNachrichtenCollector extends SketchCollector {

    static CONFIG = {
        id: "lubecker_nachrichten",
        name: "Lubecker Nachrichten",
        description: "i18n.collectors.lubecker_nachrichten.description",
        version: "0",
        website: "https://www.ln-online.de/mein-konto/#Abonnement/Plus",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4564512.jpg",
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
        entryUrl: "https://www.ln-online.de/mein-konto/#Abonnement/Plus",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LubeckerNachrichtenCollector.CONFIG);
    }
}
