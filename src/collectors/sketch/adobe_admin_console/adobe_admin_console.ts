
import { SketchCollector } from '../../sketchCollector';

export class AdobeAdminConsoleCollector extends SketchCollector {

    static CONFIG = {
        id: "adobe_admin_console",
        name: "Adobe Admin Console",
        description: "i18n.collectors.adobe_admin_console.description",
        version: "0",
        website: "https://adminconsole.adobe.com/2B7A015D60D18D5C0A495E16@AdobeOrg/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1248104.jpg",
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
        entryUrl: "https://adminconsole.adobe.com/2B7A015D60D18D5C0A495E16@AdobeOrg/account",
    }

    constructor() {
        super(AdobeAdminConsoleCollector.CONFIG);
    }
}
