
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class _5eurosComCollector extends SketchCollector {

    static CONFIG = {
        id: "5euros_com",
        name: "5euros.com",
        description: "i18n.collectors.5euros_com.description",
        version: "0",
        website: "https://www.5euros.com/achats/factures",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/88373.jpg",
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
        entryUrl: "https://www.5euros.com/achats/factures",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(_5eurosComCollector.CONFIG);
    }
}
