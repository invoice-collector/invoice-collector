
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WixComCollector extends SketchCollector {

    static CONFIG = {
        id: "wix_com",
        name: "WIX (.com)",
        description: "i18n.collectors.wix_com.description",
        version: "1",
        website: "https://wix.com/",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Wix.com_website_logo.svg",
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
        loginUrl: "https://users.wix.com/signin?forceRender=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WixComCollector.CONFIG);
    }
}
