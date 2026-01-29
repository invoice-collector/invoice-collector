
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class HueberCollector extends SketchCollector {

    static CONFIG = {
        id: "hueber",
        name: "Hueber",
        description: "i18n.collectors.hueber.description",
        version: "0",
        website: "https://www.hueber.de/?login=true",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1109630.jpg",
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
        loginUrl: "https://www.hueber.de/?login=true",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(HueberCollector.CONFIG);
    }
}
