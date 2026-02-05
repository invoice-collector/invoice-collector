
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AsosMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "asos_marketplace",
        name: "Asos Marketplace",
        description: "i18n.collectors.asos_marketplace.description",
        version: "0",
        website: "https://marketplace.asos.com/authentication/logon?returnUrl=%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1121175.jpg",
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
        loginUrl: "https://marketplace.asos.com/authentication/logon?returnUrl=%2F",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AsosMarketplaceCollector.CONFIG);
    }
}
