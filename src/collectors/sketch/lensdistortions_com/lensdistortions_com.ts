
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LensdistortionsComCollector extends SketchCollector {

    static CONFIG = {
        id: "lensdistortions_com",
        name: "lensdistortions.com",
        description: "i18n.collectors.lensdistortions_com.description",
        version: "0",
        website: "https://lensdistortions.com/my-account/orders/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2066493.jpg",
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
        loginUrl: "https://lensdistortions.com/my-account/orders/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LensdistortionsComCollector.CONFIG);
    }
}
