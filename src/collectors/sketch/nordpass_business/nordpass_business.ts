
import { SketchCollector } from '../../sketchCollector';

export class NordpassBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "nordpass_business",
        name: "Nordpass Business",
        description: "i18n.collectors.nordpass_business.description",
        version: "0",
        website: "https://panel.nordpass.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2491160.jpg",
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
        entryUrl: "https://panel.nordpass.com/billing",
    }

    constructor() {
        super(NordpassBusinessCollector.CONFIG);
    }
}
