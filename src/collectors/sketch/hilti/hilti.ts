
import { SketchCollector } from '../../sketchCollector';

export class HiltiCollector extends SketchCollector {

    static CONFIG = {
        id: "hilti",
        name: "Hilti",
        description: "i18n.collectors.hilti.description",
        version: "0",
        website: "https://www.hilti.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/16593.jpg",
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
        entryUrl: "https://www.hilti.de",
    }

    constructor() {
        super(HiltiCollector.CONFIG);
    }
}
