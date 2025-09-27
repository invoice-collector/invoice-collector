
import { SketchCollector } from '../../sketchCollector';

export class WhmcsCollector extends SketchCollector {

    static CONFIG = {
        id: "whmcs",
        name: "WHMCS",
        description: "i18n.collectors.whmcs.description",
        version: "0",
        website: "https://www.whmcs.com/members/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/28522.jpg",
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
        entryUrl: "https://www.whmcs.com/members/clientarea.php",
    }

    constructor() {
        super(WhmcsCollector.CONFIG);
    }
}
