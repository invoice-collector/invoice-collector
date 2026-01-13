
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class BineroSeCollector extends SketchCollector {

    static CONFIG = {
        id: "binero_se",
        name: "Binero.se",
        description: "i18n.collectors.binero_se.description",
        version: "0",
        website: "http://www.binero.se",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9027.jpg",
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
        loginUrl: "http://www.binero.se",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BineroSeCollector.CONFIG);
    }
}
