
import { SketchCollector } from '../../sketchCollector';

export class CodetwoCollector extends SketchCollector {

    static CONFIG = {
        id: "codetwo",
        name: "CODETWO",
        description: "i18n.collectors.codetwo.description",
        version: "0",
        website: "https://emailsignatures365.codetwo.com/Profile/Billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/850019.jpg",
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
        entryUrl: "https://emailsignatures365.codetwo.com/Profile/Billing",
    }

    constructor() {
        super(CodetwoCollector.CONFIG);
    }
}
