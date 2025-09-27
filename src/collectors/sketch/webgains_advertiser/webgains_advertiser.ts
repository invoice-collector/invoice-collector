
import { SketchCollector } from '../../sketchCollector';

export class WebgainsAdvertiserCollector extends SketchCollector {

    static CONFIG = {
        id: "webgains_advertiser",
        name: "Webgains Advertiser",
        description: "i18n.collectors.webgains_advertiser.description",
        version: "0",
        website: "https://platform.webgains.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/75998.jpg",
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
        entryUrl: "https://platform.webgains.com/login",
    }

    constructor() {
        super(WebgainsAdvertiserCollector.CONFIG);
    }
}
