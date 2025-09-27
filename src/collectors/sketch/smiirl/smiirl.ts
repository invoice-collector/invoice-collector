
import { SketchCollector } from '../../sketchCollector';

export class SmiirlCollector extends SketchCollector {

    static CONFIG = {
        id: "smiirl",
        name: "smiirl",
        description: "i18n.collectors.smiirl.description",
        version: "0",
        website: "https://my.smiirl.com/de/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/210267.jpg",
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
        entryUrl: "https://my.smiirl.com/de/orders",
    }

    constructor() {
        super(SmiirlCollector.CONFIG);
    }
}
