
import { SketchCollector } from '../../sketchCollector';

export class LightspeedhqCoUkCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeedhq_co_uk",
        name: "lightspeedhq.co.uk",
        description: "i18n.collectors.lightspeedhq_co_uk.description",
        version: "0",
        website: "https://www.lightspeedhq.co.uk/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20475.jpg",
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
        entryUrl: "https://www.lightspeedhq.co.uk/login/",
    }

    constructor() {
        super(LightspeedhqCoUkCollector.CONFIG);
    }
}
