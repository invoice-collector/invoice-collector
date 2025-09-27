
import { SketchCollector } from '../../sketchCollector';

export class TelekomBusinessKundenCollector extends SketchCollector {

    static CONFIG = {
        id: "telekom_business_kunden",
        name: "Telekom Business-Kunden",
        description: "i18n.collectors.telekom_business_kunden.description",
        version: "0",
        website: "https://www.rechnung-online-business.telekom.de/dtroot/login/loginpage.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119855.jpg",
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
        entryUrl: "https://www.rechnung-online-business.telekom.de/dtroot/login/loginpage.htm",
    }

    constructor() {
        super(TelekomBusinessKundenCollector.CONFIG);
    }
}
