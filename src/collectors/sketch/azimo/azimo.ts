
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AzimoCollector extends SketchCollector {

    static CONFIG = {
        id: "azimo",
        name: "azimo",
        description: "i18n.collectors.azimo.description",
        version: "0",
        website: "https://azimo.com/de/ngk/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7986.jpg",
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
        entryUrl: "https://azimo.com/de/ngk/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AzimoCollector.CONFIG);
    }
}
