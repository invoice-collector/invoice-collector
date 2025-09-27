
import { SketchCollector } from '../../sketchCollector';

export class ProxiRetailsCollector extends SketchCollector {

    static CONFIG = {
        id: "proxi_retails",
        name: "Proxi Retails",
        description: "i18n.collectors.proxi_retails.description",
        version: "0",
        website: "https://proxiretails.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1914265.jpg",
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
        entryUrl: "https://proxiretails.com/account",
    }

    constructor() {
        super(ProxiRetailsCollector.CONFIG);
    }
}
