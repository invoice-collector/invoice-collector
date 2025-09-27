
import { SketchCollector } from '../../sketchCollector';

export class MobilityAdsCollector extends SketchCollector {

    static CONFIG = {
        id: "mobility_ads",
        name: "Mobility Ads",
        description: "i18n.collectors.mobility_ads.description",
        version: "0",
        website: "https://partner.mobility-ads.de/de/user/auszahlungen.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776387.jpg",
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
        entryUrl: "https://partner.mobility-ads.de/de/user/auszahlungen.html",
    }

    constructor() {
        super(MobilityAdsCollector.CONFIG);
    }
}
