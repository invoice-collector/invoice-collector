
import { SketchCollector } from '../../sketchCollector';

export class TiwagCollector extends SketchCollector {

    static CONFIG = {
        id: "tiwag",
        name: "TIWAG",
        description: "i18n.collectors.tiwag.description",
        version: "0",
        website: "https://kundenportal.tiwag.at/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60004.jpg",
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
        entryUrl: "https://kundenportal.tiwag.at/",
    }

    constructor() {
        super(TiwagCollector.CONFIG);
    }
}
