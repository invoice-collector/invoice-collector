
import { SketchCollector } from '../../sketchCollector';

export class BbxMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "bbx_marketplace",
        name: "BBX Marketplace",
        description: "i18n.collectors.bbx_marketplace.description",
        version: "0",
        website: "https://bbxworld.com/Member/Account/Login?ReturnUrl=/Member/Dashboard#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8564.jpg",
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
        entryUrl: "https://bbxworld.com/Member/Account/Login?ReturnUrl=/Member/Dashboard#/",
    }

    constructor() {
        super(BbxMarketplaceCollector.CONFIG);
    }
}
