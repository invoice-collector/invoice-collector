
import { SketchCollector } from '../../sketchCollector';

export class OhneMaklerCollector extends SketchCollector {

    static CONFIG = {
        id: "ohne_makler",
        name: "Ohne-Makler",
        description: "i18n.collectors.ohne_makler.description",
        version: "0",
        website: "https://www.ohne-makler.net/invoice/list/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/130662.jpg",
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
        entryUrl: "https://www.ohne-makler.net/invoice/list/",
    }

    constructor() {
        super(OhneMaklerCollector.CONFIG);
    }
}
