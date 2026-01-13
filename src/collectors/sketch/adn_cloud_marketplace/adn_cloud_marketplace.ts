
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AdnCloudMarketplaceCollector extends SketchCollector {

    static CONFIG = {
        id: "adn_cloud_marketplace",
        name: "ADN CLOUD MARKETPLACE",
        description: "i18n.collectors.adn_cloud_marketplace.description",
        version: "0",
        website: "https://marketplace.adncloud.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/925205.jpg",
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
        loginUrl: "https://marketplace.adncloud.de/login/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AdnCloudMarketplaceCollector.CONFIG);
    }
}
