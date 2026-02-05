
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LemonSqueezyCollector extends SketchCollector {

    static CONFIG = {
        id: "lemon_squeezy",
        name: "Lemon Squeezy",
        description: "i18n.collectors.lemon_squeezy.description",
        version: "0",
        website: "https://app.lemonsqueezy.com/my-orders/991b6869-2dca-4c71-845d-e4e63b06ee7a?signature=6cff2efc9eb3d696face66a5b19d71730d1e20f36dcb85322e5df4210f33025d",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387799.jpg",
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
        loginUrl: "https://app.lemonsqueezy.com/my-orders/991b6869-2dca-4c71-845d-e4e63b06ee7a?signature=6cff2efc9eb3d696face66a5b19d71730d1e20f36dcb85322e5df4210f33025d",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LemonSqueezyCollector.CONFIG);
    }
}
