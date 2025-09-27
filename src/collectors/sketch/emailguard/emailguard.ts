
import { SketchCollector } from '../../sketchCollector';

export class EmailguardCollector extends SketchCollector {

    static CONFIG = {
        id: "emailguard",
        name: "EmailGuard",
        description: "i18n.collectors.emailguard.description",
        version: "0",
        website: "https://app.emailguard.io/billing/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4385860.jpg",
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
        entryUrl: "https://app.emailguard.io/billing/plans",
    }

    constructor() {
        super(EmailguardCollector.CONFIG);
    }
}
