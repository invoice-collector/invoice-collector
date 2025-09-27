
import { SketchCollector } from '../../sketchCollector';

export class DellCollector extends SketchCollector {

    static CONFIG = {
        id: "dell",
        name: "Dell",
        description: "i18n.collectors.dell.description",
        version: "0",
        website: "https://www.dell.com/de-de/myaccount",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8846.jpg",
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
        entryUrl: "https://www.dell.com/de-de/myaccount",
    }

    constructor() {
        super(DellCollector.CONFIG);
    }
}
