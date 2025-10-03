
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class KashflowConnectCollector extends SketchCollector {

    static CONFIG = {
        id: "kashflow_connect",
        name: "KashFlow Connect",
        description: "i18n.collectors.kashflow_connect.description",
        version: "0",
        website: "https://kfc-app.kashflow.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/67272.jpg",
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
        entryUrl: "https://kfc-app.kashflow.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(KashflowConnectCollector.CONFIG);
    }
}
