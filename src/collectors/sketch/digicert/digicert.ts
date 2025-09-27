
import { SketchCollector } from '../../sketchCollector';

export class DigicertCollector extends SketchCollector {

    static CONFIG = {
        id: "digicert",
        name: "DigiCert",
        description: "i18n.collectors.digicert.description",
        version: "0",
        website: "https://www.digicert.com/account/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53214.jpg",
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
        entryUrl: "https://www.digicert.com/account/login.php",
    }

    constructor() {
        super(DigicertCollector.CONFIG);
    }
}
