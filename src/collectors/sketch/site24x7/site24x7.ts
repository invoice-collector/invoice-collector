
import { SketchCollector } from '../../sketchCollector';

export class Site24x7Collector extends SketchCollector {

    static CONFIG = {
        id: "site24x7",
        name: "Site24x7",
        description: "i18n.collectors.site24x7.description",
        version: "0",
        website: "https://www.site24x7.com/login/success.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119974.jpg",
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
        entryUrl: "https://www.site24x7.com/login/success.jsp",
    }

    constructor() {
        super(Site24x7Collector.CONFIG);
    }
}
