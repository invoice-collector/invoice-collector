
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TogglCollector extends SketchCollector {

    static CONFIG = {
        id: "toggl",
        name: "Toggl",
        description: "i18n.collectors.toggl.description",
        version: "0",
        website: "https://www.toggl.com/app/subscription/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9663.jpg",
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
        loginUrl: "https://www.toggl.com/app/subscription/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TogglCollector.CONFIG);
    }
}
