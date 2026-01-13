
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HopperCollector extends SketchCollector {

    static CONFIG = {
        id: "hopper",
        name: "Hopper",
        description: "i18n.collectors.hopper.description",
        version: "0",
        website: "https://payments.stunning.co/receipts/1486mxkdfperpsfzinstdbdxd/cus_CfO9mnuPwtisjA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/119983.jpg",
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
        loginUrl: "https://payments.stunning.co/receipts/1486mxkdfperpsfzinstdbdxd/cus_CfO9mnuPwtisjA",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HopperCollector.CONFIG);
    }
}
