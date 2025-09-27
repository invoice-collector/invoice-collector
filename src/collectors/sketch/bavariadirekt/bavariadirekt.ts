
import { SketchCollector } from '../../sketchCollector';

export class BavariadirektCollector extends SketchCollector {

    static CONFIG = {
        id: "bavariadirekt",
        name: "bavariadirekt",
        description: "i18n.collectors.bavariadirekt.description",
        version: "0",
        website: "https://www.bavariadirekt.de/meinebavariadirekt/meine-vertraege-und-dokumente/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/124622.jpg",
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
        entryUrl: "https://www.bavariadirekt.de/meinebavariadirekt/meine-vertraege-und-dokumente/",
    }

    constructor() {
        super(BavariadirektCollector.CONFIG);
    }
}
