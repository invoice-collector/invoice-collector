
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HairfreeCollector extends SketchCollector {

    static CONFIG = {
        id: "hairfree",
        name: "hairfree",
        description: "i18n.collectors.hairfree.description",
        version: "0",
        website: "https://hairfree.idop.de/shop/index.php?controller=history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/976562.jpg",
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
        loginUrl: "https://hairfree.idop.de/shop/index.php?controller=history",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HairfreeCollector.CONFIG);
    }
}
