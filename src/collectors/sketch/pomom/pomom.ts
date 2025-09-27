
import { SketchCollector } from '../../sketchCollector';

export class PomomCollector extends SketchCollector {

    static CONFIG = {
        id: "pomom",
        name: "Pomom",
        description: "i18n.collectors.pomom.description",
        version: "0",
        website: "https://app.lexoffice.de/customerportal/authenticate/133a9abb-727a-4259-8ad6-23fc720a1054",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2014891.jpg",
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
        entryUrl: "https://app.lexoffice.de/customerportal/authenticate/133a9abb-727a-4259-8ad6-23fc720a1054",
    }

    constructor() {
        super(PomomCollector.CONFIG);
    }
}
