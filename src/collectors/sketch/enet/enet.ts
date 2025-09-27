
import { SketchCollector } from '../../sketchCollector';

export class EnetCollector extends SketchCollector {

    static CONFIG = {
        id: "enet",
        name: "eNet",
        description: "i18n.collectors.enet.description",
        version: "0",
        website: "https://esp-enet.de/pay?",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1814518.jpg",
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
        entryUrl: "https://esp-enet.de/pay?",
    }

    constructor() {
        super(EnetCollector.CONFIG);
    }
}
