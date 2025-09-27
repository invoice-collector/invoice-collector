
import { SketchCollector } from '../../sketchCollector';

export class ChpadblockCollector extends SketchCollector {

    static CONFIG = {
        id: "chpadblock",
        name: "Chpadblock",
        description: "i18n.collectors.chpadblock.description",
        version: "0",
        website: "https://chpadblock.com/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334866.jpg",
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
        entryUrl: "https://chpadblock.com/account/orders/",
    }

    constructor() {
        super(ChpadblockCollector.CONFIG);
    }
}
