
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DynadotCollector extends SketchCollector {

    static CONFIG = {
        id: "dynadot",
        name: "dynadot",
        description: "i18n.collectors.dynadot.description",
        version: "0",
        website: "https://www.dynadot.com/account/info/order/list.html",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/72218.jpg",
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
        loginUrl: "https://www.dynadot.com/account/info/order/list.html",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DynadotCollector.CONFIG);
    }
}
