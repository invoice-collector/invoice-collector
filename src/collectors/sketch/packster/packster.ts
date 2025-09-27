
import { SketchCollector } from '../../sketchCollector';

export class PacksterCollector extends SketchCollector {

    static CONFIG = {
        id: "packster",
        name: "Packster",
        description: "i18n.collectors.packster.description",
        version: "0",
        website: "https://www.packster.de/account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1675295.jpg",
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
        entryUrl: "https://www.packster.de/account/orders/",
    }

    constructor() {
        super(PacksterCollector.CONFIG);
    }
}
