
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class JustcomCollector extends SketchCollector {

    static CONFIG = {
        id: "justcom",
        name: "JustCom",
        description: "i18n.collectors.justcom.description",
        version: "0",
        website: "https://www.justcom-shop.de/shopware.php/sViewport,account/sAction,orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/487.jpg",
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
        loginUrl: "https://www.justcom-shop.de/shopware.php/sViewport,account/sAction,orders",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(JustcomCollector.CONFIG);
    }
}
