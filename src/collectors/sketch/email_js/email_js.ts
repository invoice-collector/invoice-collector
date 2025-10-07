
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EmailJsCollector extends SketchCollector {

    static CONFIG = {
        id: "email_js",
        name: "Email JS",
        description: "i18n.collectors.email_js.description",
        version: "0",
        website: "https://dashboard.emailjs.com/admin/account/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778222.jpg",
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
        entryUrl: "https://dashboard.emailjs.com/admin/account/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EmailJsCollector.CONFIG);
    }
}
