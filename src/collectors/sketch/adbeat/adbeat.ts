
import { SketchCollector } from '../../sketchCollector';

export class AdbeatCollector extends SketchCollector {

    static CONFIG = {
        id: "adbeat",
        name: "Adbeat",
        description: "i18n.collectors.adbeat.description",
        version: "0",
        website: "https://adbeat.com/user-profile/billing_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/197387.jpg",
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
        entryUrl: "https://adbeat.com/user-profile/billing_history",
    }

    constructor() {
        super(AdbeatCollector.CONFIG);
    }
}
