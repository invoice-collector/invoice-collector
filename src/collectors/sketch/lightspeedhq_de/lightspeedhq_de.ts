
import { SketchCollector } from '../../sketchCollector';

export class LightspeedhqDeCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeedhq_de",
        name: "lightspeedhq.de",
        description: "i18n.collectors.lightspeedhq_de.description",
        version: "0",
        website: "https://www.lightspeedhq.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20478.jpg",
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
        entryUrl: "https://www.lightspeedhq.de/login/",
    }

    constructor() {
        super(LightspeedhqDeCollector.CONFIG);
    }
}
