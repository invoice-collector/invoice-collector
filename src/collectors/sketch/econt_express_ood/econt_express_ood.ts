
import { SketchCollector } from '../../sketchCollector';

export class EcontExpressOodCollector extends SketchCollector {

    static CONFIG = {
        id: "econt_express_ood",
        name: "Econt express OOD",
        description: "i18n.collectors.econt_express_ood.description",
        version: "0",
        website: "https://ee.econt.com/index.php",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1221883.jpg",
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
        entryUrl: "https://ee.econt.com/index.php",
    }

    constructor() {
        super(EcontExpressOodCollector.CONFIG);
    }
}
