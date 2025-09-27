
import { SketchCollector } from '../../sketchCollector';

export class EstugoCollector extends SketchCollector {

    static CONFIG = {
        id: "estugo",
        name: "ESTUGO",
        description: "i18n.collectors.estugo.description",
        version: "0",
        website: "https://hera.estugo.de:8443/login_up.php?success_redirect_url=%2Fsmb%2Fweb%2Fview",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/55429.jpg",
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
        entryUrl: "https://hera.estugo.de:8443/login_up.php?success_redirect_url=%2Fsmb%2Fweb%2Fview",
    }

    constructor() {
        super(EstugoCollector.CONFIG);
    }
}
