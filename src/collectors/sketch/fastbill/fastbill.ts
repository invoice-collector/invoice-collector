
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class FastbillCollector extends SketchCollector {

    static CONFIG = {
        id: "fastbill",
        name: "FastBill",
        description: "i18n.collectors.fastbill.description",
        version: "0",
        website: "https://my.fastbill.com/index.php?cmd=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/492.jpg",
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
        loginUrl: "https://my.fastbill.com/index.php?cmd=1",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FastbillCollector.CONFIG);
    }
}
