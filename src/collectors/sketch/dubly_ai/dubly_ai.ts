
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DublyAiCollector extends SketchCollector {

    static CONFIG = {
        id: "dubly_ai",
        name: "Dubly AI",
        description: "i18n.collectors.dubly_ai.description",
        version: "0",
        website: "https://dubly.ai/account?nav=plan&v=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3312828.jpg",
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
        entryUrl: "https://dubly.ai/account?nav=plan&v=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DublyAiCollector.CONFIG);
    }
}
