
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FirecrawlCollector extends SketchCollector {

    static CONFIG = {
        id: "firecrawl",
        name: "Firecrawl",
        description: "i18n.collectors.firecrawl.description",
        version: "0",
        website: "https://www.firecrawl.dev/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4639453.jpg",
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
        entryUrl: "https://www.firecrawl.dev/signin",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FirecrawlCollector.CONFIG);
    }
}
