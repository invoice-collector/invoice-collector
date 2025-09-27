
import { SketchCollector } from '../../sketchCollector';

export class SmartscoutCollector extends SketchCollector {

    static CONFIG = {
        id: "smartscout",
        name: "Smartscout",
        description: "i18n.collectors.smartscout.description",
        version: "0",
        website: "https://app.smartscout.com/app/account/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2284733.jpg",
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
        entryUrl: "https://app.smartscout.com/app/account/billing",
    }

    constructor() {
        super(SmartscoutCollector.CONFIG);
    }
}
