
import { SketchCollector } from '../../sketchCollector';

export class WebflowCollector extends SketchCollector {

    static CONFIG = {
        id: "webflow",
        name: "Webflow",
        description: "i18n.collectors.webflow.description",
        version: "0",
        website: "https://webflow.com/dashboard/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/10760.jpg",
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
        entryUrl: "https://webflow.com/dashboard/login",
    }

    constructor() {
        super(WebflowCollector.CONFIG);
    }
}
