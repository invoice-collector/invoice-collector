
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class WhosoffCollector extends SketchCollector {

    static CONFIG = {
        id: "whosoff",
        name: "WhosOff",
        description: "i18n.collectors.whosoff.description",
        version: "0",
        website: "https://staff.whosoff.com/login/?Redirect=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/24906.jpg",
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
        loginUrl: "https://staff.whosoff.com/login/?Redirect=/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WhosoffCollector.CONFIG);
    }
}
