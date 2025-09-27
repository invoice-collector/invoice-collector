
import { SketchCollector } from '../../sketchCollector';

export class LeadpagesCollector extends SketchCollector {

    static CONFIG = {
        id: "leadpages",
        name: "LeadPages",
        description: "i18n.collectors.leadpages.description",
        version: "0",
        website: "https://my.leadpages.net/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7357.jpg",
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
        entryUrl: "https://my.leadpages.net/login/",
    }

    constructor() {
        super(LeadpagesCollector.CONFIG);
    }
}
