
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class VlyCollector extends SketchCollector {

    static CONFIG = {
        id: "vly",
        name: "vly",
        description: "i18n.collectors.vly.description",
        version: "0",
        website: "https://www.vlyfoods.com/tools/recurring/portal/72f5a1fc2fb5056f70bb9f6b3d731c/orders?token=1cee0f50f0e34d7a8775a6534c96eb5f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1322323.jpg",
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
        loginUrl: "https://www.vlyfoods.com/tools/recurring/portal/72f5a1fc2fb5056f70bb9f6b3d731c/orders?token=1cee0f50f0e34d7a8775a6534c96eb5f",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(VlyCollector.CONFIG);
    }
}
