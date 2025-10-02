
import { SketchCollector } from '../../sketchCollector';

export class OnlineprintersDeCollector extends SketchCollector {

    static CONFIG = {
        id: "onlineprinters_de",
        name: "Onlineprinters (.de)",
        description: "i18n.collectors.onlineprinters_de.description",
        version: "0",
        website: "https://www.onlineprinters.de/websale8/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777333.jpg",
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
        entryUrl: "https://www.onlineprinters.de/websale8/",
    }

    constructor() {
        super(OnlineprintersDeCollector.CONFIG);
    }
}
