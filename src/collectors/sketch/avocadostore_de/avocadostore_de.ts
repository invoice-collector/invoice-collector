
import { SketchCollector } from '../../sketchCollector';

export class AvocadostoreDeCollector extends SketchCollector {

    static CONFIG = {
        id: "avocadostore_de",
        name: "avocadostore.de",
        description: "i18n.collectors.avocadostore_de.description",
        version: "0",
        website: "https://www.avocadostore.de/user_session/new",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/44817.jpg",
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
        entryUrl: "https://www.avocadostore.de/user_session/new",
    }

    constructor() {
        super(AvocadostoreDeCollector.CONFIG);
    }
}
