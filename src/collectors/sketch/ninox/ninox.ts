
import { SketchCollector } from '../../sketchCollector';

export class NinoxCollector extends SketchCollector {

    static CONFIG = {
        id: "ninox",
        name: "Ninox",
        description: "i18n.collectors.ninox.description",
        version: "0",
        website: "https://ninoxdb.de/de/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/150642.jpg",
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
        entryUrl: "https://ninoxdb.de/de/subscriptions",
    }

    constructor() {
        super(NinoxCollector.CONFIG);
    }
}
