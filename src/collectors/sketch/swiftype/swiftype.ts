
import { SketchCollector } from '../../sketchCollector';

export class SwiftypeCollector extends SketchCollector {

    static CONFIG = {
        id: "swiftype",
        name: "Swiftype",
        description: "i18n.collectors.swiftype.description",
        version: "0",
        website: "https://app.swiftype.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/64889.jpg",
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
        entryUrl: "https://app.swiftype.com/settings/billing",
    }

    constructor() {
        super(SwiftypeCollector.CONFIG);
    }
}
