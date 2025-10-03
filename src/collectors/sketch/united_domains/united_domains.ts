
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UnitedDomainsCollector extends SketchCollector {

    static CONFIG = {
        id: "united_domains",
        name: "United-Domains",
        description: "i18n.collectors.united_domains.description",
        version: "0",
        website: "https://www.united-domains.de/portfolio/a/user/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/400.jpg",
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
        entryUrl: "https://www.united-domains.de/portfolio/a/user/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UnitedDomainsCollector.CONFIG);
    }
}
