
import { SketchCollector } from '../../sketchCollector';

export class AccessibeCollector extends SketchCollector {

    static CONFIG = {
        id: "accessibe",
        name: "accessiBe",
        description: "i18n.collectors.accessibe.description",
        version: "0",
        website: "https://dashboard.accessibe.com/app/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2761292.jpg",
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
        entryUrl: "https://dashboard.accessibe.com/app/billing",
    }

    constructor() {
        super(AccessibeCollector.CONFIG);
    }
}
