
import { SketchCollector } from '../../sketchCollector';

export class PushalertCollector extends SketchCollector {

    static CONFIG = {
        id: "pushalert",
        name: "pushalert",
        description: "i18n.collectors.pushalert.description",
        version: "0",
        website: "https://pushalert.co/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/190076.jpg",
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
        entryUrl: "https://pushalert.co/dashboard/billing",
    }

    constructor() {
        super(PushalertCollector.CONFIG);
    }
}
