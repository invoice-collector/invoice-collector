
import { SketchCollector } from '../../sketchCollector';

export class ThrivecartCollector extends SketchCollector {

    static CONFIG = {
        id: "thrivecart",
        name: "ThriveCart",
        description: "i18n.collectors.thrivecart.description",
        version: "0",
        website: "https://thrivecart.com/signin/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/48584.jpg",
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
        entryUrl: "https://thrivecart.com/signin/",
    }

    constructor() {
        super(ThrivecartCollector.CONFIG);
    }
}
