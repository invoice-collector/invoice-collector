
import { SketchCollector } from '../../sketchCollector';

export class WebfleetCollector extends SketchCollector {

    static CONFIG = {
        id: "webfleet",
        name: "webfleet",
        description: "i18n.collectors.webfleet.description",
        version: "0",
        website: "https://www.webfleet.com/webfleet/products/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/228699.jpg",
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
        entryUrl: "https://www.webfleet.com/webfleet/products/login/",
    }

    constructor() {
        super(WebfleetCollector.CONFIG);
    }
}
