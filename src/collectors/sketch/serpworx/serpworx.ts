
import { SketchCollector } from '../../sketchCollector';

export class SerpworxCollector extends SketchCollector {

    static CONFIG = {
        id: "serpworx",
        name: "serpworx",
        description: "i18n.collectors.serpworx.description",
        version: "0",
        website: "https://www.serpworx.com/account/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1342444.jpg",
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
        entryUrl: "https://www.serpworx.com/account/",
    }

    constructor() {
        super(SerpworxCollector.CONFIG);
    }
}
