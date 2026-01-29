
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MailmeteorCollector extends SketchCollector {

    static CONFIG = {
        id: "mailmeteor",
        name: "Mailmeteor",
        description: "i18n.collectors.mailmeteor.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xRWFTTjdLQUxJalp1c3VRLF9OT0xTNzFKZnVsZllCZzdhUzJRSUo2eEJvUHVTeEVz0100jgHDZKN7",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1769542.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xRWFTTjdLQUxJalp1c3VRLF9OT0xTNzFKZnVsZllCZzdhUzJRSUo2eEJvUHVTeEVz0100jgHDZKN7",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(MailmeteorCollector.CONFIG);
    }
}
