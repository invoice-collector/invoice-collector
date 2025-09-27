
import { SketchCollector } from '../../sketchCollector';

export class AteraCollector extends SketchCollector {

    static CONFIG = {
        id: "atera",
        name: "ATERA",
        description: "i18n.collectors.atera.description",
        version: "0",
        website: "https://app.atera.com/Login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/794842.jpg",
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
        entryUrl: "https://app.atera.com/Login",
    }

    constructor() {
        super(AteraCollector.CONFIG);
    }
}
