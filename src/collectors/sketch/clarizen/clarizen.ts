
import { SketchCollector } from '../../sketchCollector';

export class ClarizenCollector extends SketchCollector {

    static CONFIG = {
        id: "clarizen",
        name: "Clarizen",
        description: "i18n.collectors.clarizen.description",
        version: "0",
        website: "https://app2.clarizen.com/Clarizen/Pages/Service/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8719.jpg",
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
        entryUrl: "https://app2.clarizen.com/Clarizen/Pages/Service/Login.aspx",
    }

    constructor() {
        super(ClarizenCollector.CONFIG);
    }
}
