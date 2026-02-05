import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class AppleIcloudCollector extends SketchCollector {

    static CONFIG = {
        id: "apple_icloud",
        name: "Apple iCloud",
        description: "i18n.collectors.apple_icloud.description",
        version: "0",
        website: "https://www.icloud.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/ICloud_logo.svg",
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
        loginUrl: "https://www.icloud.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(AppleIcloudCollector.CONFIG);
    }
}
