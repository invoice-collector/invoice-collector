
import { SketchCollector } from '../../sketchCollector';

export class MaxxprintCollector extends SketchCollector {

    static CONFIG = {
        id: "maxxprint",
        name: "Maxxprint",
        description: "i18n.collectors.maxxprint.description",
        version: "0",
        website: "https://maxxprint.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3273850.jpg",
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
        entryUrl: "https://maxxprint.de/account/orders",
    }

    constructor() {
        super(MaxxprintCollector.CONFIG);
    }
}
