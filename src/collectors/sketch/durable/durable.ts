
import { SketchCollector } from '../../sketchCollector';

export class DurableCollector extends SketchCollector {

    static CONFIG = {
        id: "durable",
        name: "Durable",
        description: "i18n.collectors.durable.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xS0xhVDJCMEFNWG1JOVpFLF9SaXVwMTA3SFhQU0czRE0yVzhpVjRETFV2VUxjY3NG0100YnW4IiPj",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4334732.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xS0xhVDJCMEFNWG1JOVpFLF9SaXVwMTA3SFhQU0czRE0yVzhpVjRETFV2VUxjY3NG0100YnW4IiPj",
    }

    constructor() {
        super(DurableCollector.CONFIG);
    }
}
