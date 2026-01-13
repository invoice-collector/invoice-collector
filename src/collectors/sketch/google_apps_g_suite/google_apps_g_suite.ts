
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleAppsGSuiteCollector extends SketchCollector {

    static CONFIG = {
        id: "google_apps_g_suite",
        name: "Google Apps - G Suite",
        description: "i18n.collectors.google_apps_g_suite.description",
        version: "0",
        website: "https://admin.google.com/AdminHome",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/531.jpg",
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
        loginUrl: "https://admin.google.com/AdminHome",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleAppsGSuiteCollector.CONFIG);
    }
}
