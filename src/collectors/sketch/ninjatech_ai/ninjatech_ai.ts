
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NinjatechAiCollector extends SketchCollector {

    static CONFIG = {
        id: "ninjatech_ai",
        name: "NinjaTech AI",
        description: "i18n.collectors.ninjatech_ai.description",
        version: "0",
        website: "https://myninja.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356156.jpg",
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
        entryUrl: "https://myninja.ai/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NinjatechAiCollector.CONFIG);
    }
}
