
import { SketchCollector } from '../../sketchCollector';

export class WhimsicalCollector extends SketchCollector {

    static CONFIG = {
        id: "whimsical",
        name: "Whimsical",
        description: "i18n.collectors.whimsical.description",
        version: "0",
        website: "https://whimsical.com/workspace/subscription",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245909.jpg",
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
        entryUrl: "https://whimsical.com/workspace/subscription",
    }

    constructor() {
        super(WhimsicalCollector.CONFIG);
    }
}
