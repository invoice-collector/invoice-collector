
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ScholarAiCollector extends SketchCollector {

    static CONFIG = {
        id: "scholar_ai",
        name: "Scholar AI",
        description: "i18n.collectors.scholar_ai.description",
        version: "0",
        website: "https://scholarai.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2513853.jpg",
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
        entryUrl: "https://scholarai.io/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScholarAiCollector.CONFIG);
    }
}
