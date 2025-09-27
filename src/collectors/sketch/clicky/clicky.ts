
import { SketchCollector } from '../../sketchCollector';

export class ClickyCollector extends SketchCollector {

    static CONFIG = {
        id: "clicky",
        name: "clicky",
        description: "i18n.collectors.clicky.description",
        version: "0",
        website: "https://clicky.com/user/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71497.jpg",
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
        entryUrl: "https://clicky.com/user/payments",
    }

    constructor() {
        super(ClickyCollector.CONFIG);
    }
}
