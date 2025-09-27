
import { SketchCollector } from '../../sketchCollector';

export class TwengaCollector extends SketchCollector {

    static CONFIG = {
        id: "twenga",
        name: "Twenga",
        description: "i18n.collectors.twenga.description",
        version: "0",
        website: "https://app.twenga-solutions.com/de/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3100.jpg",
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
        entryUrl: "https://app.twenga-solutions.com/de/billing",
    }

    constructor() {
        super(TwengaCollector.CONFIG);
    }
}
