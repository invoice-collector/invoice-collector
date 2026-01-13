
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class CoscheduleCollector extends SketchCollector {

    static CONFIG = {
        id: "coschedule",
        name: "CoSchedule",
        description: "i18n.collectors.coschedule.description",
        version: "0",
        website: "https://app.coschedule.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/14246.jpg",
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
        loginUrl: "https://app.coschedule.com",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(CoscheduleCollector.CONFIG);
    }
}
