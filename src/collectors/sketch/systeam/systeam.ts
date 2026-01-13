
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class SysteamCollector extends SketchCollector {

    static CONFIG = {
        id: "systeam",
        name: "Systeam",
        description: "i18n.collectors.systeam.description",
        version: "0",
        website: "http://www.systeam.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/71733.jpg",
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
        loginUrl: "http://www.systeam.de",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SysteamCollector.CONFIG);
    }
}
