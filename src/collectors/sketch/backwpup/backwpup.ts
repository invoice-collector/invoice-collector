
import { SketchCollector } from '../../sketchCollector';

export class BackwpupCollector extends SketchCollector {

    static CONFIG = {
        id: "backwpup",
        name: "BackWPup",
        description: "i18n.collectors.backwpup.description",
        version: "0",
        website: "https://backwpup.de/mein-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/77337.jpg",
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
        entryUrl: "https://backwpup.de/mein-account/orders/",
    }

    constructor() {
        super(BackwpupCollector.CONFIG);
    }
}
