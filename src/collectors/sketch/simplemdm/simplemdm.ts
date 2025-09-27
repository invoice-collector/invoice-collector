
import { SketchCollector } from '../../sketchCollector';

export class SimplemdmCollector extends SketchCollector {

    static CONFIG = {
        id: "simplemdm",
        name: "SimpleMDM",
        description: "i18n.collectors.simplemdm.description",
        version: "0",
        website: "https://a.simplemdm.com/admin/auth/sign_in",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/78251.jpg",
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
        entryUrl: "https://a.simplemdm.com/admin/auth/sign_in",
    }

    constructor() {
        super(SimplemdmCollector.CONFIG);
    }
}
