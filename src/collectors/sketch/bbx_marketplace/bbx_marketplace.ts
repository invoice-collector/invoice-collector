
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BbxMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "bbx_marketplace",
        name: "BBX Marketplace",
        description: "i18n.collectors.bbx_marketplace.description",
        version: "0",
        website: "https://bbxworld.com/Member/Account/Login?ReturnUrl=/Member/Dashboard#/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8564.jpg",
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
        loginUrl: "https://bbxworld.com/Member/Account/Login?ReturnUrl=/Member/Dashboard#/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(BbxMarketplaceCollector.CONFIG);
    }
}
