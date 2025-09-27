
import { SketchCollector } from '../../sketchCollector';

export class BluefaxCollector extends SketchCollector {

    static CONFIG = {
        id: "bluefax",
        name: "blueFAX",
        description: "i18n.collectors.bluefax.description",
        version: "0",
        website: "https://login.blue-fax.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14407.jpg",
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
        entryUrl: "https://login.blue-fax.com",
    }

    constructor() {
        super(BluefaxCollector.CONFIG);
    }
}
