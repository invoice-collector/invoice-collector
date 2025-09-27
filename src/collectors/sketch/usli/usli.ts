
import { SketchCollector } from '../../sketchCollector';

export class UsliCollector extends SketchCollector {

    static CONFIG = {
        id: "usli",
        name: "USLI",
        description: "i18n.collectors.usli.description",
        version: "0",
        website: "https://myaccount.usli.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4176334.jpg",
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
        entryUrl: "https://myaccount.usli.com/",
    }

    constructor() {
        super(UsliCollector.CONFIG);
    }
}
