
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DeutschePostEfilialeCollector extends SketchCollector {

    static CONFIG = {
        id: "deutsche_post_efiliale",
        name: "Deutsche Post - eFiliale",
        description: "i18n.collectors.deutsche_post_efiliale.description",
        version: "0",
        website: "https://shop.deutschepost.de/shop/login_page.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8208.jpg",
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
        loginUrl: "https://shop.deutschepost.de/shop/login_page.jsp",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DeutschePostEfilialeCollector.CONFIG);
    }
}
