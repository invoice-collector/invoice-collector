
import { SketchCollector } from '../../sketchCollector';

export class TombaExpressCollector extends SketchCollector {

    static CONFIG = {
        id: "tomba_express",
        name: "Tomba express",
        description: "i18n.collectors.tomba_express.description",
        version: "0",
        website: "https://www.tomba-express.com/index.php?action=my_orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70083.jpg",
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
        entryUrl: "https://www.tomba-express.com/index.php?action=my_orders",
    }

    constructor() {
        super(TombaExpressCollector.CONFIG);
    }
}
