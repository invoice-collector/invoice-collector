
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailreachCollector extends SketchCollector {

    static CONFIG = {
        id: "mailreach",
        name: "MailReach",
        description: "i18n.collectors.mailreach.description",
        version: "0",
        website: "https://app.mailreach.co/dashboard/12497/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732522.jpg",
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
        entryUrl: "https://app.mailreach.co/dashboard/12497/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailreachCollector.CONFIG);
    }
}
