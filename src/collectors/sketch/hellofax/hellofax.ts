
import { SketchCollector } from '../../sketchCollector';

export class HellofaxCollector extends SketchCollector {

    static CONFIG = {
        id: "hellofax",
        name: "HelloFax",
        description: "i18n.collectors.hellofax.description",
        version: "0",
        website: "https://app.hellofax.com/account/logIn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8812.jpg",
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
        entryUrl: "https://app.hellofax.com/account/logIn",
    }

    constructor() {
        super(HellofaxCollector.CONFIG);
    }
}
