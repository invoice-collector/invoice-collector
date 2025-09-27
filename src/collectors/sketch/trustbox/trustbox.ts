
import { SketchCollector } from '../../sketchCollector';

export class TrustboxCollector extends SketchCollector {

    static CONFIG = {
        id: "trustbox",
        name: "Trustbox",
        description: "i18n.collectors.trustbox.description",
        version: "0",
        website: "https://trustboxbackup.com/client/clientarea.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1060588.jpg",
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
        entryUrl: "https://trustboxbackup.com/client/clientarea.php",
    }

    constructor() {
        super(TrustboxCollector.CONFIG);
    }
}
