
import { SketchCollector } from '../../sketchCollector';

export class AdpWorkforceNowCollector extends SketchCollector {

    static CONFIG = {
        id: "adp_workforce_now",
        name: "ADP Workforce Now",
        description: "i18n.collectors.adp_workforce_now.description",
        version: "0",
        website: "https://workforcenow.adp.com/public/index.htm",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8511.jpg",
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
        entryUrl: "https://workforcenow.adp.com/public/index.htm",
    }

    constructor() {
        super(AdpWorkforceNowCollector.CONFIG);
    }
}
