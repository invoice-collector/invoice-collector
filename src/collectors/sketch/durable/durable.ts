
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DurableCollector extends SketchCollector {

    static CONFIG = {
        id: "durable",
        name: "Durable",
        description: "i18n.collectors.durable.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xS0xhVDJCMEFNWG1JOVpFLF9SaXVwMTA3SFhQU0czRE0yVzhpVjRETFV2VUxjY3NG0100YnW4IiPj",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334732.jpg",
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
        loginUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xS0xhVDJCMEFNWG1JOVpFLF9SaXVwMTA3SFhQU0czRE0yVzhpVjRETFV2VUxjY3NG0100YnW4IiPj",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DurableCollector.CONFIG);
    }
}
