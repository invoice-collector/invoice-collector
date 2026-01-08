
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class NetReviewsCollector extends SketchCollector {

    static CONFIG = {
        id: "net_reviews",
        name: "Net reviews",
        description: "i18n.collectors.net_reviews.description",
        version: "0",
        website: "https://www.avis-verifies.com/index.php?page=mod_info_banque",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/135329.jpg",
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
        loginUrl: "https://www.avis-verifies.com/index.php?page=mod_info_banque",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NetReviewsCollector.CONFIG);
    }
}
