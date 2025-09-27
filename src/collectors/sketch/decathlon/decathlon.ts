
import { SketchCollector } from '../../sketchCollector';

export class DecathlonCollector extends SketchCollector {

    static CONFIG = {
        id: "decathlon",
        name: "DECATHLON",
        description: "i18n.collectors.decathlon.description",
        version: "0",
        website: "https://www.decathlon.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27571.jpg",
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
        entryUrl: "https://www.decathlon.de/login",
    }

    constructor() {
        super(DecathlonCollector.CONFIG);
    }
}
