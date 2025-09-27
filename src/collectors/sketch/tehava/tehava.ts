
import { SketchCollector } from '../../sketchCollector';

export class TehavaCollector extends SketchCollector {

    static CONFIG = {
        id: "tehava",
        name: "Tehava",
        description: "i18n.collectors.tehava.description",
        version: "0",
        website: "https://www.tehava.com/en-us/profile/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32530.jpg",
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
        entryUrl: "https://www.tehava.com/en-us/profile/login",
    }

    constructor() {
        super(TehavaCollector.CONFIG);
    }
}
