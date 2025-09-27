
import { SketchCollector } from '../../sketchCollector';

export class WebgainsPublisherCollector extends SketchCollector {

    static CONFIG = {
        id: "webgains_publisher",
        name: "Webgains Publisher",
        description: "i18n.collectors.webgains_publisher.description",
        version: "0",
        website: "https://platform.webgains.io/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077389.jpg",
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
        entryUrl: "https://platform.webgains.io/",
    }

    constructor() {
        super(WebgainsPublisherCollector.CONFIG);
    }
}
