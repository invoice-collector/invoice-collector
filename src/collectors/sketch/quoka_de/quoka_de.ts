
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class QuokaDeCollector extends SketchCollector {

    static CONFIG = {
        id: "quoka_de",
        name: "QUOKA.de",
        description: "i18n.collectors.quoka_de.description",
        version: "0",
        website: "https://www.quoka.de/mein-konto/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/806059.jpg",
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
        entryUrl: "https://www.quoka.de/mein-konto/login.html",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(QuokaDeCollector.CONFIG);
    }
}
