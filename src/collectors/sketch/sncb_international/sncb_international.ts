
import { SketchCollector } from '../../sketchCollector';

export class SncbInternationalCollector extends SketchCollector {

    static CONFIG = {
        id: "sncb_international",
        name: "SNCB International",
        description: "i18n.collectors.sncb_international.description",
        version: "0",
        website: "https://agent.b-europe.com/fr",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/784223.jpg",
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
        entryUrl: "https://agent.b-europe.com/fr",
    }

    constructor() {
        super(SncbInternationalCollector.CONFIG);
    }
}
