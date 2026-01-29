
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class RmvHandyticketCollector extends SketchCollector {

    static CONFIG = {
        id: "rmv_handyticket",
        name: "RMV Handyticket",
        description: "i18n.collectors.rmv_handyticket.description",
        version: "0",
        website: "https://www.rmv.de/c/de/start/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9449.jpg",
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
        loginUrl: "https://www.rmv.de/c/de/start/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(RmvHandyticketCollector.CONFIG);
    }
}
