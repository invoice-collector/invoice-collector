
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MonotypeCollector extends SketchCollector {

    static CONFIG = {
        id: "monotype",
        name: "Monotype",
        description: "i18n.collectors.monotype.description",
        version: "0",
        website: "https://accounts.monotype.com/de/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2975267.jpg",
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
        entryUrl: "https://accounts.monotype.com/de/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MonotypeCollector.CONFIG);
    }
}
