
import { SketchCollector } from '../../sketchCollector';

export class PagerangersCollector extends SketchCollector {

    static CONFIG = {
        id: "pagerangers",
        name: "PageRangers",
        description: "i18n.collectors.pagerangers.description",
        version: "0",
        website: "https://app.pagerangers.com/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10782.jpg",
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
        entryUrl: "https://app.pagerangers.com/Login",
    }

    constructor() {
        super(PagerangersCollector.CONFIG);
    }
}
