
import { SketchCollector } from '../../sketchCollector';

export class AgandoCollector extends SketchCollector {

    static CONFIG = {
        id: "agando",
        name: "Agando",
        description: "i18n.collectors.agando.description",
        version: "0",
        website: "https://www.agando-shop.de/login.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19632.jpg",
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
        entryUrl: "https://www.agando-shop.de/login.php",
    }

    constructor() {
        super(AgandoCollector.CONFIG);
    }
}
