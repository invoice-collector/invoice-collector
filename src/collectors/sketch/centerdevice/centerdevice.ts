
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CenterdeviceCollector extends SketchCollector {

    static CONFIG = {
        id: "centerdevice",
        name: "CenterDevice",
        description: "i18n.collectors.centerdevice.description",
        version: "0",
        website: "https://www.centerdevice.de/anmelden/.",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11679.jpg",
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
        loginUrl: "https://www.centerdevice.de/anmelden/.",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(CenterdeviceCollector.CONFIG);
    }
}
