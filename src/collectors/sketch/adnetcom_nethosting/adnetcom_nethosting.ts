
import { SketchCollector } from '../../sketchCollector';

export class AdnetcomNethostingCollector extends SketchCollector {

    static CONFIG = {
        id: "adnetcom_nethosting",
        name: "Adnetcom NetHosting",
        description: "i18n.collectors.adnetcom_nethosting.description",
        version: "0",
        website: "http://www.nethosting.ws/login.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32368.jpg",
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
        entryUrl: "http://www.nethosting.ws/login.html",
    }

    constructor() {
        super(AdnetcomNethostingCollector.CONFIG);
    }
}
