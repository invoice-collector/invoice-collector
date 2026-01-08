
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FnacMarketplaceFrCollector extends SketchCollector {

    static CONFIG = {
        id: "fnac_marketplace_fr",
        name: "FNAC MarketPlace (.fr)",
        description: "i18n.collectors.fnac_marketplace_fr.description",
        version: "0",
        website: "https://mp.fnac.com/compte/vendeur/factures/date_desc/1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4604329.jpg",
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
        loginUrl: "https://mp.fnac.com/compte/vendeur/factures/date_desc/1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FnacMarketplaceFrCollector.CONFIG);
    }
}
