
import { SketchCollector } from '../../sketchCollector';

export class UrssafCollector extends SketchCollector {

    static CONFIG = {
        id: "urssaf",
        name: "URSSAF",
        description: "i18n.collectors.urssaf.description",
        version: "0",
        website: "https://webti.urssaf.fr/dashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2729767.jpg",
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
        entryUrl: "https://webti.urssaf.fr/dashboard",
    }

    constructor() {
        super(UrssafCollector.CONFIG);
    }
}
