
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ScreencloudSignageCollector extends SketchCollector {

    static CONFIG = {
        id: "screencloud_signage",
        name: "ScreenCloud Signage",
        description: "i18n.collectors.screencloud_signage.description",
        version: "0",
        website: "https://signage.screen.cloud",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/96934.jpg",
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
        loginUrl: "https://signage.screen.cloud",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ScreencloudSignageCollector.CONFIG);
    }
}
