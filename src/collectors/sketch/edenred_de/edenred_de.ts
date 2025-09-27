
import { SketchCollector } from '../../sketchCollector';

export class EdenredDeCollector extends SketchCollector {

    static CONFIG = {
        id: "edenred_de",
        name: "Edenred.de",
        description: "i18n.collectors.edenred_de.description",
        version: "0",
        website: "https://firmenkunden.mein-edenred.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11059.jpg",
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
        entryUrl: "https://firmenkunden.mein-edenred.de",
    }

    constructor() {
        super(EdenredDeCollector.CONFIG);
    }
}
