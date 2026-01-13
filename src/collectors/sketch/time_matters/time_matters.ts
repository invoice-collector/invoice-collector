
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TimeMattersCollector extends SketchCollector {

    static CONFIG = {
        id: "time_matters",
        name: "time:matters",
        description: "i18n.collectors.time_matters.description",
        version: "0",
        website: "https://www.time-matters.com/service-center/online-booking/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/15749.jpg",
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
        loginUrl: "https://www.time-matters.com/service-center/online-booking/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TimeMattersCollector.CONFIG);
    }
}
