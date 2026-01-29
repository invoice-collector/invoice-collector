
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MpCareCollector extends SketchCollector {

    static CONFIG = {
        id: "mp_care",
        name: "MP Care",
        description: "i18n.collectors.mp_care.description",
        version: "0",
        website: "www.mpcare.de/account/order",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4414902.jpg",
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
        loginUrl: "www.mpcare.de/account/order",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MpCareCollector.CONFIG);
    }
}
