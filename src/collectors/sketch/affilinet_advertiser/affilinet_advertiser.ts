
import { SketchCollector } from '../../sketchCollector';

export class AffilinetAdvertiserCollector extends SketchCollector {

    static CONFIG = {
        id: "affilinet_advertiser",
        name: "affilinet - Advertiser",
        description: "i18n.collectors.affilinet_advertiser.description",
        version: "0",
        website: "https://advertiser.affili.net/Login.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/39657.jpg",
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
        entryUrl: "https://advertiser.affili.net/Login.aspx",
    }

    constructor() {
        super(AffilinetAdvertiserCollector.CONFIG);
    }
}
