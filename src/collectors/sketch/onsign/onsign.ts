
import { SketchCollector } from '../../sketchCollector';

export class OnsignCollector extends SketchCollector {

    static CONFIG = {
        id: "onsign",
        name: "Onsign",
        description: "i18n.collectors.onsign.description",
        version: "0",
        website: "https://app.onsign.tv/accounts/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1090142.jpg",
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
        entryUrl: "https://app.onsign.tv/accounts/login/",
    }

    constructor() {
        super(OnsignCollector.CONFIG);
    }
}
