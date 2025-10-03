
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DelveAiCollector extends SketchCollector {

    static CONFIG = {
        id: "delve_ai",
        name: "Delve AI",
        description: "i18n.collectors.delve_ai.description",
        version: "0",
        website: "https://www.delve.ai/payment/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2166353.jpg",
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
        entryUrl: "https://www.delve.ai/payment/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DelveAiCollector.CONFIG);
    }
}
