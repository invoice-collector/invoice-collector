
import { SketchCollector } from '../../sketchCollector';

export class FrontendmastersCollector extends SketchCollector {

    static CONFIG = {
        id: "frontendmasters",
        name: "FrontendMasters",
        description: "i18n.collectors.frontendmasters.description",
        version: "0",
        website: "https://frontendmasters.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/35392.jpg",
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
        entryUrl: "https://frontendmasters.com/login/",
    }

    constructor() {
        super(FrontendmastersCollector.CONFIG);
    }
}
