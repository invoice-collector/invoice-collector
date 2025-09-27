
import { SketchCollector } from '../../sketchCollector';

export class SnapaddyCollector extends SketchCollector {

    static CONFIG = {
        id: "snapaddy",
        name: "snapADDY",
        description: "i18n.collectors.snapaddy.description",
        version: "0",
        website: "https://app.snapaddy.com/login?redirect_url=%252F%253Flocale%253Den",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/18545.jpg",
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
        entryUrl: "https://app.snapaddy.com/login?redirect_url=%252F%253Flocale%253Den",
    }

    constructor() {
        super(SnapaddyCollector.CONFIG);
    }
}
