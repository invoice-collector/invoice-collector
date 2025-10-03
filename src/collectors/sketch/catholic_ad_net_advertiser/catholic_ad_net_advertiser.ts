
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class CatholicAdNetAdvertiserCollector extends SketchCollector {

    static CONFIG = {
        id: "catholic_ad_net_advertiser",
        name: "Catholic Ad Net Advertiser",
        description: "i18n.collectors.catholic_ad_net_advertiser.description",
        version: "0",
        website: "https://www.catholicadnet.com/advertiser/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387797.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.catholicadnet.com/advertiser/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CatholicAdNetAdvertiserCollector.CONFIG);
    }
}
