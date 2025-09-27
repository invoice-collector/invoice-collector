
import { SketchCollector } from '../../sketchCollector';

export class WebpilotCollector extends SketchCollector {

    static CONFIG = {
        id: "webpilot",
        name: "Webpilot",
        description: "i18n.collectors.webpilot.description",
        version: "0",
        website: "https://www.webpilot.ai/developer/dashboard/payment?addResult=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2694539.jpg",
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
        entryUrl: "https://www.webpilot.ai/developer/dashboard/payment?addResult=true",
    }

    constructor() {
        super(WebpilotCollector.CONFIG);
    }
}
