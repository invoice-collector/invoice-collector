
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WixComCollector extends SketchCollector {

    static CONFIG = {
        id: "wix_com",
        name: "WIX.com",
        description: "i18n.collectors.wix_com.description",
        version: "0",
        website: "https://premium.wix.com/wix/api/mpContainerStaticController#/billings?referralAdditionalInfo=account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/542.jpg",
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
        loginUrl: "https://premium.wix.com/wix/api/mpContainerStaticController#/billings?referralAdditionalInfo=account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WixComCollector.CONFIG);
    }
}
