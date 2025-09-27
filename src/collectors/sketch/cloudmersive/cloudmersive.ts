
import { SketchCollector } from '../../sketchCollector';

export class CloudmersiveCollector extends SketchCollector {

    static CONFIG = {
        id: "cloudmersive",
        name: "cloudmersive",
        description: "i18n.collectors.cloudmersive.description",
        version: "0",
        website: "https://portal.cloudmersive.com/manageproduct?ProductSelection=6de154e2-31ef-4d69-b1b4-f1af413d69ea",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2098043.jpg",
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
        entryUrl: "https://portal.cloudmersive.com/manageproduct?ProductSelection=6de154e2-31ef-4d69-b1b4-f1af413d69ea",
    }

    constructor() {
        super(CloudmersiveCollector.CONFIG);
    }
}
