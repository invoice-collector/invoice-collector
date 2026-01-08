
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LogMyTimeCollector extends SketchCollector {

    static CONFIG = {
        id: "log_my_time",
        name: "Log My Time",
        description: "i18n.collectors.log_my_time.description",
        version: "0",
        website: "https://dynamic.logmytime.de/Profile/Logon",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2220.jpg",
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
        loginUrl: "https://dynamic.logmytime.de/Profile/Logon",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LogMyTimeCollector.CONFIG);
    }
}
