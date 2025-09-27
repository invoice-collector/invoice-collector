
import { SketchCollector } from '../../sketchCollector';

export class JuitCollector extends SketchCollector {

    static CONFIG = {
        id: "juit",
        name: "Juit",
        description: "i18n.collectors.juit.description",
        version: "0",
        website: "https://www.juit.com/de/profile/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3197748.jpg",
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
        entryUrl: "https://www.juit.com/de/profile/orders",
    }

    constructor() {
        super(JuitCollector.CONFIG);
    }
}
