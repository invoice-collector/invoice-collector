
import { SketchCollector } from '../../sketchCollector';

export class DuplicatorCollector extends SketchCollector {

    static CONFIG = {
        id: "duplicator",
        name: "Duplicator",
        description: "i18n.collectors.duplicator.description",
        version: "0",
        website: "https://duplicator.com/my-account/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2654969.jpg",
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
        entryUrl: "https://duplicator.com/my-account/billing/",
    }

    constructor() {
        super(DuplicatorCollector.CONFIG);
    }
}
