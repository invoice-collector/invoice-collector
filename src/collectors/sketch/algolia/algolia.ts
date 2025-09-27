
import { SketchCollector } from '../../sketchCollector';

export class AlgoliaCollector extends SketchCollector {

    static CONFIG = {
        id: "algolia",
        name: "algolia",
        description: "i18n.collectors.algolia.description",
        version: "0",
        website: "https://www.algolia.com/users/edit#?tab=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/51574.jpg",
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
        entryUrl: "https://www.algolia.com/users/edit#?tab=invoices",
    }

    constructor() {
        super(AlgoliaCollector.CONFIG);
    }
}
