
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GodaddyCollector extends SketchCollector {

    static CONFIG = {
        id: "godaddy",
        name: "GoDaddy",
        description: "i18n.collectors.godaddy.description",
        version: "0",
        website: "https://sso.godaddy.com/v1/?regionsite=de&path=%2f&realm=idp&marketid=de-DE",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1242.jpg",
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
        loginUrl: "https://sso.godaddy.com/v1/?regionsite=de&path=%2f&realm=idp&marketid=de-DE",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GodaddyCollector.CONFIG);
    }
}
