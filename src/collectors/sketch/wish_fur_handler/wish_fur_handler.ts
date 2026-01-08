
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WishFurHandlerCollector extends SketchCollector {

    static CONFIG = {
        id: "wish_fur_handler",
        name: "wish fur Handler",
        description: "i18n.collectors.wish_fur_handler.description",
        version: "0",
        website: "https://merchant.wish.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60382.jpg",
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
        loginUrl: "https://merchant.wish.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WishFurHandlerCollector.CONFIG);
    }
}
