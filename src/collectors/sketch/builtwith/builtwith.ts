
import { SketchCollector } from '../../sketchCollector';

export class BuiltwithCollector extends SketchCollector {

    static CONFIG = {
        id: "builtwith",
        name: "BuiltWith",
        description: "i18n.collectors.builtwith.description",
        version: "0",
        website: "https://pro.builtwith.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32686.jpg",
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
        entryUrl: "https://pro.builtwith.com/billing",
    }

    constructor() {
        super(BuiltwithCollector.CONFIG);
    }
}
