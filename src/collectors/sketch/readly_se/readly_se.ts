
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ReadlySeCollector extends SketchCollector {

    static CONFIG = {
        id: "readly_se",
        name: "Readly - SE",
        description: "i18n.collectors.readly_se.description",
        version: "0",
        website: "https://se.readly.com/accounts/subscriptions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4569036.jpg",
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
        loginUrl: "https://se.readly.com/accounts/subscriptions",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReadlySeCollector.CONFIG);
    }
}
