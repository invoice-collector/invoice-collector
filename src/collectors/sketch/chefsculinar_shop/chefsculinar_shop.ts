
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ChefsculinarShopCollector extends SketchCollector {

    static CONFIG = {
        id: "chefsculinar_shop",
        name: "Chefsculinar Shop",
        description: "i18n.collectors.chefsculinar_shop.description",
        version: "0",
        website: "https://shop.chefsculinar.de/de-de/account/bestell%C3%BCbersicht",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1277583.jpg",
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
        loginUrl: "https://shop.chefsculinar.de/de-de/account/bestell%C3%BCbersicht",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(ChefsculinarShopCollector.CONFIG);
    }
}
