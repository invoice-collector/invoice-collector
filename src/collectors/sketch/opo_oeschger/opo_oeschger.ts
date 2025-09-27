
import { SketchCollector } from '../../sketchCollector';

export class OpoOeschgerCollector extends SketchCollector {

    static CONFIG = {
        id: "opo_oeschger",
        name: "OPO Oeschger",
        description: "i18n.collectors.opo_oeschger.description",
        version: "0",
        website: "https://www.opo.de/de/shop/rechnungen",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1268960.jpg",
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
        entryUrl: "https://www.opo.de/de/shop/rechnungen",
    }

    constructor() {
        super(OpoOeschgerCollector.CONFIG);
    }
}
