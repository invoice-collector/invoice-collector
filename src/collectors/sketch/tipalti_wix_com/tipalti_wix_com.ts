
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TipaltiWixComCollector extends SketchCollector {

    static CONFIG = {
        id: "tipalti_wix_com",
        name: "tipalti Wix.com",
        description: "i18n.collectors.tipalti_wix_com.description",
        version: "0",
        website: "https://suppliers.tipalti.com/wix/Portal/Index",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2105951.jpg",
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
        loginUrl: "https://suppliers.tipalti.com/wix/Portal/Index",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TipaltiWixComCollector.CONFIG);
    }
}
