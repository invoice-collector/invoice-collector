
import { SketchCollector } from '../../sketchCollector';

export class LdlcProCollector extends SketchCollector {

    static CONFIG = {
        id: "ldlc_pro",
        name: "LDLC.pro",
        description: "i18n.collectors.ldlc_pro.description",
        version: "0",
        website: "https://secure.ldlc-pro.com/Account/LoginPage.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/63685.jpg",
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
        entryUrl: "https://secure.ldlc-pro.com/Account/LoginPage.aspx",
    }

    constructor() {
        super(LdlcProCollector.CONFIG);
    }
}
