
import { SketchCollector } from '../../sketchCollector';

export class RainbowprintCollector extends SketchCollector {

    static CONFIG = {
        id: "rainbowprint",
        name: "Rainbowprint",
        description: "i18n.collectors.rainbowprint.description",
        version: "0",
        website: "http://www.rainbowprint.de/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32682.jpg",
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
        entryUrl: "http://www.rainbowprint.de/",
    }

    constructor() {
        super(RainbowprintCollector.CONFIG);
    }
}
