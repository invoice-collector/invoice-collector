
import { SketchCollector } from '../../sketchCollector';

export class BlinkistCollector extends SketchCollector {

    static CONFIG = {
        id: "blinkist",
        name: "Blinkist",
        description: "i18n.collectors.blinkist.description",
        version: "0",
        website: "https://www.blinkist.com/de/nc/settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1216268.jpg",
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
        entryUrl: "https://www.blinkist.com/de/nc/settings",
    }

    constructor() {
        super(BlinkistCollector.CONFIG);
    }
}
