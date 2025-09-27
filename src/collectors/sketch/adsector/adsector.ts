
import { SketchCollector } from '../../sketchCollector';

export class AdsectorCollector extends SketchCollector {

    static CONFIG = {
        id: "adsector",
        name: "AdSector",
        description: "i18n.collectors.adsector.description",
        version: "0",
        website: "https://adsector.com/account/member/payment-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71495.jpg",
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
        entryUrl: "https://adsector.com/account/member/payment-history",
    }

    constructor() {
        super(AdsectorCollector.CONFIG);
    }
}
