
import { SketchCollector } from '../../sketchCollector';

export class WannafindDkCollector extends SketchCollector {

    static CONFIG = {
        id: "wannafind_dk",
        name: "Wannafind.dk",
        description: "i18n.collectors.wannafind_dk.description",
        version: "0",
        website: "https://controlpanel.wannafind.dk/Login?ReturnURL=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9569.jpg",
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
        entryUrl: "https://controlpanel.wannafind.dk/Login?ReturnURL=%2f",
    }

    constructor() {
        super(WannafindDkCollector.CONFIG);
    }
}
