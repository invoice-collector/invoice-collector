
import { SketchCollector } from '../../sketchCollector';

export class OcmInternetMarketingCollector extends SketchCollector {

    static CONFIG = {
        id: "ocm_internet_marketing",
        name: "OCM Internet Marketing",
        description: "i18n.collectors.ocm_internet_marketing.description",
        version: "0",
        website: "https://partner.net.ocm.de/app/index.html#/account/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/115314.jpg",
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
        entryUrl: "https://partner.net.ocm.de/app/index.html#/account/payments",
    }

    constructor() {
        super(OcmInternetMarketingCollector.CONFIG);
    }
}
