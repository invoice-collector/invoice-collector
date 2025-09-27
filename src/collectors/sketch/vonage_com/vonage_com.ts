
import { SketchCollector } from '../../sketchCollector';

export class VonageComCollector extends SketchCollector {

    static CONFIG = {
        id: "vonage_com",
        name: "Vonage.com",
        description: "i18n.collectors.vonage_com.description",
        version: "0",
        website: "https://secure.vonage.com/account/doLogin.html?icmp=HO_LOGIN_BANNER",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8563.jpg",
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
        entryUrl: "https://secure.vonage.com/account/doLogin.html?icmp=HO_LOGIN_BANNER",
    }

    constructor() {
        super(VonageComCollector.CONFIG);
    }
}
