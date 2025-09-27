
import { SketchCollector } from '../../sketchCollector';

export class NovecCollector extends SketchCollector {

    static CONFIG = {
        id: "novec",
        name: "NOVEC",
        description: "i18n.collectors.novec.description",
        version: "0",
        website: "https://novec.smarthub.coop/ui/#/billingHistory",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723389.jpg",
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
        entryUrl: "https://novec.smarthub.coop/ui/#/billingHistory",
    }

    constructor() {
        super(NovecCollector.CONFIG);
    }
}
