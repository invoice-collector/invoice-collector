
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class OnvistaCollector extends SketchCollector {

    static CONFIG = {
        id: "onvista",
        name: "onvista",
        description: "i18n.collectors.onvista.description",
        version: "0",
        website: "https://my.onvista.de/login?from=https://www.onvista.de/&fromEnv=www&cid=website_display_myov_desktop-navigation-cta",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/36481.jpg",
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
        loginUrl: "https://my.onvista.de/login?from=https://www.onvista.de/&fromEnv=www&cid=website_display_myov_desktop-navigation-cta",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(OnvistaCollector.CONFIG);
    }
}
