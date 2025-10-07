
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EnvatoCollector extends SketchCollector {

    static CONFIG = {
        id: "envato",
        name: "Envato",
        description: "i18n.collectors.envato.description",
        version: "0",
        website: "https://account.elements.envato.com/de/account/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/118700.jpg",
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
        entryUrl: "https://account.elements.envato.com/de/account/subscription",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnvatoCollector.CONFIG);
    }
}
