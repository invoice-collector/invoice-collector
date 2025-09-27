
import { SketchCollector } from '../../sketchCollector';

export class CdfolieCollector extends SketchCollector {

    static CONFIG = {
        id: "cdfolie",
        name: "Cdfolie",
        description: "i18n.collectors.cdfolie.description",
        version: "0",
        website: "http://www.cdfolie.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115966.jpg",
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
        entryUrl: "http://www.cdfolie.com/",
    }

    constructor() {
        super(CdfolieCollector.CONFIG);
    }
}
