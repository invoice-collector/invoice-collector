
import { SketchCollector } from '../../sketchCollector';

export class FlipsnackCollector extends SketchCollector {

    static CONFIG = {
        id: "flipsnack",
        name: "Flipsnack",
        description: "i18n.collectors.flipsnack.description",
        version: "0",
        website: "https://app.flipsnack.com/billing/invoice/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1488438.jpg",
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
        entryUrl: "https://app.flipsnack.com/billing/invoice/",
    }

    constructor() {
        super(FlipsnackCollector.CONFIG);
    }
}
