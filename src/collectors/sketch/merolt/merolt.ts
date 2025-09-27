
import { SketchCollector } from '../../sketchCollector';

export class MeroltCollector extends SketchCollector {

    static CONFIG = {
        id: "merolt",
        name: "merolt",
        description: "i18n.collectors.merolt.description",
        version: "0",
        website: "https://www.merolt.de/my-account-2/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27383.jpg",
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
        entryUrl: "https://www.merolt.de/my-account-2/",
    }

    constructor() {
        super(MeroltCollector.CONFIG);
    }
}
