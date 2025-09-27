
import { SketchCollector } from '../../sketchCollector';

export class ConfluenceTestCollector extends SketchCollector {

    static CONFIG = {
        id: "confluence_test",
        name: "Confluence TEST",
        description: "i18n.collectors.confluence_test.description",
        version: "0",
        website: "https://www.atlassian.com/software/confluence/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2582348.jpg",
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
        entryUrl: "https://www.atlassian.com/software/confluence/billing",
    }

    constructor() {
        super(ConfluenceTestCollector.CONFIG);
    }
}
