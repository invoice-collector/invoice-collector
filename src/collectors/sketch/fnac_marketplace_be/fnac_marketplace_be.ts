
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FnacMarketplaceBeCollector extends SketchCollector {

    static CONFIG = {
        id: "fnac_marketplace_be",
        name: "FNAC MarketPlace (BE)",
        description: "i18n.collectors.fnac_marketplace_be.description",
        version: "0",
        website: "https://secure.fr.fnac.be/identity/server/gateway/signin-signup",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4543347.jpg",
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
        loginUrl: "https://secure.fr.fnac.be/identity/server/gateway/signin-signup",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(FnacMarketplaceBeCollector.CONFIG);
    }
}
