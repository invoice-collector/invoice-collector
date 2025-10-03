
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SeoAiCollector extends SketchCollector {

    static CONFIG = {
        id: "seo_ai",
        name: "SEO.ai",
        description: "i18n.collectors.seo_ai.description",
        version: "0",
        website: "https://app.seo.ai",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2175417.jpg",
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
        entryUrl: "https://app.seo.ai",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SeoAiCollector.CONFIG);
    }
}
