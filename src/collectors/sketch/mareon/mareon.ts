
import { SketchCollector } from '../../sketchCollector';

export class MareonCollector extends SketchCollector {

    static CONFIG = {
        id: "mareon",
        name: "Mareon",
        description: "i18n.collectors.mareon.description",
        version: "0",
        website: "http://www.mareon.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11957.jpg",
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
        entryUrl: "http://www.mareon.com",
    }

    constructor() {
        super(MareonCollector.CONFIG);
    }
}
