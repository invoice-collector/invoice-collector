
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DupliCheckerCollector extends SketchCollector {

    static CONFIG = {
        id: "dupli_checker",
        name: "Dupli Checker",
        description: "i18n.collectors.dupli_checker.description",
        version: "0",
        website: "https://pro.duplichecker.com/account-settings",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4181714.jpg",
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
        loginUrl: "https://pro.duplichecker.com/account-settings",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DupliCheckerCollector.CONFIG);
    }
}
