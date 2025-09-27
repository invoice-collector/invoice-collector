
import { SketchCollector } from '../../sketchCollector';

export class BasecampCollector extends SketchCollector {

    static CONFIG = {
        id: "basecamp",
        name: "Basecamp",
        description: "i18n.collectors.basecamp.description",
        version: "0",
        website: "https://launchpad.37signals.com/basecamp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/527.jpg",
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
        entryUrl: "https://launchpad.37signals.com/basecamp",
    }

    constructor() {
        super(BasecampCollector.CONFIG);
    }
}
