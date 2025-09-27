
import { SketchCollector } from '../../sketchCollector';

export class HighspeedinternetComCollector extends SketchCollector {

    static CONFIG = {
        id: "highspeedinternet_com",
        name: "highspeedinternet.com",
        description: "i18n.collectors.highspeedinternet_com.description",
        version: "0",
        website: "http://www.highspeedinternet.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8690.jpg",
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
        entryUrl: "http://www.highspeedinternet.com",
    }

    constructor() {
        super(HighspeedinternetComCollector.CONFIG);
    }
}
