
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleDomainsCollector extends SketchCollector {

    static CONFIG = {
        id: "google_domains",
        name: "Google Domains",
        description: "i18n.collectors.google_domains.description",
        version: "0",
        website: "https://domains.google.com/registrar/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1242911.jpg",
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
        entryUrl: "https://domains.google.com/registrar/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleDomainsCollector.CONFIG);
    }
}
