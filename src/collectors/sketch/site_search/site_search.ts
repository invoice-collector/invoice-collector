
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SiteSearchCollector extends SketchCollector {

    static CONFIG = {
        id: "site_search",
        name: "Site Search",
        description: "i18n.collectors.site_search.description",
        version: "0",
        website: "https://control.sitesearch360.com/#section=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/418622.jpg",
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
        entryUrl: "https://control.sitesearch360.com/#section=invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SiteSearchCollector.CONFIG);
    }
}
