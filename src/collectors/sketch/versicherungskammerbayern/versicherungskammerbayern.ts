
import { SketchCollector } from '../../sketchCollector';

export class VersicherungskammerbayernCollector extends SketchCollector {

    static CONFIG = {
        id: "versicherungskammerbayern",
        name: "VersicherungskammerBayern",
        description: "i18n.collectors.versicherungskammerbayern.description",
        version: "0",
        website: "https://www.vkb.de/content/services/mein-premiumservice/#/anmeldung",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194681.jpg",
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
        entryUrl: "https://www.vkb.de/content/services/mein-premiumservice/#/anmeldung",
    }

    constructor() {
        super(VersicherungskammerbayernCollector.CONFIG);
    }
}
