
import { SketchCollector } from '../../sketchCollector';

export class DashthisCollector extends SketchCollector {

    static CONFIG = {
        id: "dashthis",
        name: "dashthis",
        description: "i18n.collectors.dashthis.description",
        version: "0",
        website: "https://dashthis.com/app/admin/Security/LogOn",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/17792.jpg",
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
        entryUrl: "https://dashthis.com/app/admin/Security/LogOn",
    }

    constructor() {
        super(DashthisCollector.CONFIG);
    }
}
