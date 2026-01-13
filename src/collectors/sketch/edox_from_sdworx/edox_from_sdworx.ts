
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EdoxFromSdworxCollector extends SketchCollector {

    static CONFIG = {
        id: "edox_from_sdworx",
        name: "eDox from SDWorx",
        description: "i18n.collectors.edox_from_sdworx.description",
        version: "0",
        website: "https://www.sd.be/edoxv2/release/#",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778952.jpg",
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
        loginUrl: "https://www.sd.be/edoxv2/release/#",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdoxFromSdworxCollector.CONFIG);
    }
}
