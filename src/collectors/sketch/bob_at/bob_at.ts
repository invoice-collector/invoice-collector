
import { SketchCollector } from '../../sketchCollector';

export class BobAtCollector extends SketchCollector {

    static CONFIG = {
        id: "bob_at",
        name: "bob.at",
        description: "i18n.collectors.bob_at.description",
        version: "0",
        website: "https://rechnung.bob.at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/79445.jpg",
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
        entryUrl: "https://rechnung.bob.at",
    }

    constructor() {
        super(BobAtCollector.CONFIG);
    }
}
