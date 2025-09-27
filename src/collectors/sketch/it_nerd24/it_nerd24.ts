
import { SketchCollector } from '../../sketchCollector';

export class ItNerd24Collector extends SketchCollector {

    static CONFIG = {
        id: "it_nerd24",
        name: "it-nerd24",
        description: "i18n.collectors.it_nerd24.description",
        version: "0",
        website: "https://it-nerd24.de/account#hide-registration",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/81073.jpg",
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
        entryUrl: "https://it-nerd24.de/account#hide-registration",
    }

    constructor() {
        super(ItNerd24Collector.CONFIG);
    }
}
