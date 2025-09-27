
import { SketchCollector } from '../../sketchCollector';

export class PinterstCollector extends SketchCollector {

    static CONFIG = {
        id: "pinterst",
        name: "Pinterst",
        description: "i18n.collectors.pinterst.description",
        version: "0",
        website: "https://ads.pinterest.com/advertiser/549762496194/billing/history/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2075470.jpg",
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
        entryUrl: "https://ads.pinterest.com/advertiser/549762496194/billing/history/",
    }

    constructor() {
        super(PinterstCollector.CONFIG);
    }
}
