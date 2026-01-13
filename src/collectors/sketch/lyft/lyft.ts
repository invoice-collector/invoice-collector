
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class LyftCollector extends SketchCollector {

    static CONFIG = {
        id: "lyft",
        name: "Lyft",
        description: "i18n.collectors.lyft.description",
        version: "0",
        website: "https://account.lyft.com/auth?next=https%3A%2F%2Fwww.lyft.com%2Flogin%2Fjump",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9356.jpg",
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
        loginUrl: "https://account.lyft.com/auth?next=https%3A%2F%2Fwww.lyft.com%2Flogin%2Fjump",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LyftCollector.CONFIG);
    }
}
