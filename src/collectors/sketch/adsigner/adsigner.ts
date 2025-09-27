
import { SketchCollector } from '../../sketchCollector';

export class AdsignerCollector extends SketchCollector {

    static CONFIG = {
        id: "adsigner",
        name: "ADSIGNER",
        description: "i18n.collectors.adsigner.description",
        version: "0",
        website: "https://www.adsigner.com/app/en/customer/billing/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2985626.jpg",
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
        entryUrl: "https://www.adsigner.com/app/en/customer/billing/",
    }

    constructor() {
        super(AdsignerCollector.CONFIG);
    }
}
