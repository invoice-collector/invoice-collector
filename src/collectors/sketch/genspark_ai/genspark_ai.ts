
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GensparkAiCollector extends SketchCollector {

    static CONFIG = {
        id: "genspark_ai",
        name: "Genspark.ai",
        description: "i18n.collectors.genspark_ai.description",
        version: "0",
        website: "https://www.genspark.ai/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4439648.jpg",
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
        entryUrl: "https://www.genspark.ai/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GensparkAiCollector.CONFIG);
    }
}
