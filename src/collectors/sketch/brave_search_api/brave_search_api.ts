
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BraveSearchApiCollector extends SketchCollector {

    static CONFIG = {
        id: "brave_search_api",
        name: "Brave Search API",
        description: "i18n.collectors.brave_search_api.description",
        version: "0",
        website: "https://api-dashboard.search.brave.com/app/invoicing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4642570.jpg",
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
        entryUrl: "https://api-dashboard.search.brave.com/app/invoicing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BraveSearchApiCollector.CONFIG);
    }
}
