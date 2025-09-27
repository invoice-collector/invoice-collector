
import { SketchCollector } from '../../sketchCollector';

export class KirschWhiskyCollector extends SketchCollector {

    static CONFIG = {
        id: "kirsch_whisky",
        name: "Kirsch Whisky",
        description: "i18n.collectors.kirsch_whisky.description",
        version: "0",
        website: "https://kirschwhisky.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/91231.jpg",
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
        entryUrl: "https://kirschwhisky.de/login",
    }

    constructor() {
        super(KirschWhiskyCollector.CONFIG);
    }
}
