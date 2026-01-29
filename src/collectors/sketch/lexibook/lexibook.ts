
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LexibookCollector extends SketchCollector {

    static CONFIG = {
        id: "lexibook",
        name: "Lexibook",
        description: "i18n.collectors.lexibook.description",
        version: "0",
        website: "https://www.lexibook.com/en/customer/account/login/referer/aHR0cHM6Ly93d3cubGV4aWJvb2suY29tL2VuL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120812.jpg",
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
        loginUrl: "https://www.lexibook.com/en/customer/account/login/referer/aHR0cHM6Ly93d3cubGV4aWJvb2suY29tL2VuL2N1c3RvbWVyL2FjY291bnQvaW5kZXgv/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(LexibookCollector.CONFIG);
    }
}
