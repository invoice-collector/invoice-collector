
import { SketchCollector } from '../../sketchCollector';

export class SliteCollector extends SketchCollector {

    static CONFIG = {
        id: "slite",
        name: "Slite",
        description: "i18n.collectors.slite.description",
        version: "0",
        website: "https://slite.com/organization/select",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/786628.jpg",
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
        entryUrl: "https://slite.com/organization/select",
    }

    constructor() {
        super(SliteCollector.CONFIG);
    }
}
