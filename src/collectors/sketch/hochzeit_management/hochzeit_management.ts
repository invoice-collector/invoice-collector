
import { SketchCollector } from '../../sketchCollector';

export class HochzeitManagementCollector extends SketchCollector {

    static CONFIG = {
        id: "hochzeit_management",
        name: "Hochzeit.Management",
        description: "i18n.collectors.hochzeit_management.description",
        version: "0",
        website: "https://app.hochzeit.management/Invoice?view=overview&list=all",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/194680.jpg",
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
        entryUrl: "https://app.hochzeit.management/Invoice?view=overview&list=all",
    }

    constructor() {
        super(HochzeitManagementCollector.CONFIG);
    }
}
