
import { SketchCollector } from '../../sketchCollector';

export class BloomonNlCollector extends SketchCollector {

    static CONFIG = {
        id: "bloomon_nl",
        name: "bloomon(nl)",
        description: "i18n.collectors.bloomon_nl.description",
        version: "0",
        website: "https://www.bloomon.nl/login/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/987510.jpg",
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
        entryUrl: "https://www.bloomon.nl/login/dashboard",
    }

    constructor() {
        super(BloomonNlCollector.CONFIG);
    }
}
