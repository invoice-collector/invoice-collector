
import { SketchCollector } from '../../sketchCollector';

export class ClickskeksCollector extends SketchCollector {

    static CONFIG = {
        id: "clickskeks",
        name: "Clickskeks",
        description: "i18n.collectors.clickskeks.description",
        version: "0",
        website: "https://mein.clickskeks.at/domains",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220338.jpg",
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
        entryUrl: "https://mein.clickskeks.at/domains",
    }

    constructor() {
        super(ClickskeksCollector.CONFIG);
    }
}
