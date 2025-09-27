
import { SketchCollector } from '../../sketchCollector';

export class SearchmetricsCollector extends SketchCollector {

    static CONFIG = {
        id: "searchmetrics",
        name: "Searchmetrics",
        description: "i18n.collectors.searchmetrics.description",
        version: "0",
        website: "https://www.searchmetrics.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1256086.jpg",
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
        entryUrl: "https://www.searchmetrics.com/",
    }

    constructor() {
        super(SearchmetricsCollector.CONFIG);
    }
}
