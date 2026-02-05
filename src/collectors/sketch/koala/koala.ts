
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class KoalaCollector extends SketchCollector {

    static CONFIG = {
        id: "koala",
        name: "Koala",
        description: "i18n.collectors.koala.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xTVpWbUtIR1lNTzlpdEszLF9RaENFSFVyR3hFRnZHeTJ1STA4ZDg1cWlJdXZaaVhZ0100vFe3vnD7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3118597.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xTVpWbUtIR1lNTzlpdEszLF9RaENFSFVyR3hFRnZHeTJ1STA4ZDg1cWlJdXZaaVhZ0100vFe3vnD7",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(KoalaCollector.CONFIG);
    }
}
