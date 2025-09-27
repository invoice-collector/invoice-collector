
import { SketchCollector } from '../../sketchCollector';

export class WeeblrCollector extends SketchCollector {

    static CONFIG = {
        id: "weeblr",
        name: "weeblr",
        description: "i18n.collectors.weeblr.description",
        version: "0",
        website: "https://www.weeblrpress.com/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64952.jpg",
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
        entryUrl: "https://www.weeblrpress.com/dashboard",
    }

    constructor() {
        super(WeeblrCollector.CONFIG);
    }
}
