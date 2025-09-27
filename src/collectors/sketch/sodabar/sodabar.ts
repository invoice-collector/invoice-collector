
import { SketchCollector } from '../../sketchCollector';

export class SodabarCollector extends SketchCollector {

    static CONFIG = {
        id: "sodabar",
        name: "SodaBar",
        description: "i18n.collectors.sodabar.description",
        version: "0",
        website: "https://www.sodabaer.de/account/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2727952.jpg",
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
        entryUrl: "https://www.sodabaer.de/account/orders",
    }

    constructor() {
        super(SodabarCollector.CONFIG);
    }
}
