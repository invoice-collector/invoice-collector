
import { SketchCollector } from '../../sketchCollector';

export class RinganaCollector extends SketchCollector {

    static CONFIG = {
        id: "ringana",
        name: "RINGANA",
        description: "i18n.collectors.ringana.description",
        version: "0",
        website: "https://www.ringana.com/mein-kundenkonto/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/66623.jpg",
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
        entryUrl: "https://www.ringana.com/mein-kundenkonto/",
    }

    constructor() {
        super(RinganaCollector.CONFIG);
    }
}
