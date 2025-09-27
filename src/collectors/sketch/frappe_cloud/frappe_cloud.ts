
import { SketchCollector } from '../../sketchCollector';

export class FrappeCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "frappe_cloud",
        name: "Frappe Cloud",
        description: "i18n.collectors.frappe_cloud.description",
        version: "0",
        website: "https://frappecloud.com/dashboard/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2192161.jpg",
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
        entryUrl: "https://frappecloud.com/dashboard/billing",
    }

    constructor() {
        super(FrappeCloudCollector.CONFIG);
    }
}
