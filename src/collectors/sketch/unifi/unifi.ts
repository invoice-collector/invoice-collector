
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class UnifiCollector extends SketchCollector {

    static CONFIG = {
        id: "unifi",
        name: "UniFi",
        description: "i18n.collectors.unifi.description",
        version: "0",
        website: "https://unifi.com.my/personal",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/134904.jpg",
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
        loginUrl: "https://unifi.com.my/personal",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(UnifiCollector.CONFIG);
    }
}
