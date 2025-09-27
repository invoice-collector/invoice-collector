
import { SketchCollector } from '../../sketchCollector';

export class GlasfaserOstbayernCollector extends SketchCollector {

    static CONFIG = {
        id: "glasfaser_ostbayern",
        name: "Glasfaser Ostbayern",
        description: "i18n.collectors.glasfaser_ostbayern.description",
        version: "0",
        website: "https://kundenportal.r-kom.de/intern/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9343.jpg",
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
        entryUrl: "https://kundenportal.r-kom.de/intern/",
    }

    constructor() {
        super(GlasfaserOstbayernCollector.CONFIG);
    }
}
