
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SerifAiCollector extends SketchCollector {

    static CONFIG = {
        id: "serif_ai",
        name: "Serif AI",
        description: "i18n.collectors.serif_ai.description",
        version: "0",
        website: "https://dashboard.serif.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4554147.jpg",
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
        entryUrl: "https://dashboard.serif.ai/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SerifAiCollector.CONFIG);
    }
}
