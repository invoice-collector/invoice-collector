
import { SketchCollector } from '../../sketchCollector';

export class LdlcComCollector extends SketchCollector {

    static CONFIG = {
        id: "ldlc_com",
        name: "LDLC.com",
        description: "i18n.collectors.ldlc_com.description",
        version: "0",
        website: "https://secure.ldlc.com/Account/LoginPage.aspx?redir=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27339.jpg",
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
        entryUrl: "https://secure.ldlc.com/Account/LoginPage.aspx?redir=%2f",
    }

    constructor() {
        super(LdlcComCollector.CONFIG);
    }
}
