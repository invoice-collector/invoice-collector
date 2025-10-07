
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class StratoDeCollector extends SketchCollector {

    static CONFIG = {
        id: "strato_de",
        name: "STRATO.de",
        description: "i18n.collectors.strato_de.description",
        version: "0",
        website: "https://www.strato.de/apps/CustomerService",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/309.jpg",
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
        entryUrl: "https://www.strato.de/apps/CustomerService",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(StratoDeCollector.CONFIG);
    }
}
