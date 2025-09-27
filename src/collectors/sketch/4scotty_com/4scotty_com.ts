
import { SketchCollector } from '../../sketchCollector';

export class _4scottyComCollector extends SketchCollector {

    static CONFIG = {
        id: "4scotty_com",
        name: "4scotty.com",
        description: "i18n.collectors.4scotty_com.description",
        version: "0",
        website: "https://4scotty.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/25645.jpg",
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
        entryUrl: "https://4scotty.com/login",
    }

    constructor() {
        super(_4scottyComCollector.CONFIG);
    }
}
