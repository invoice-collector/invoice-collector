
import { SketchCollector } from '../../sketchCollector';

export class SendgridCollector extends SketchCollector {

    static CONFIG = {
        id: "sendgrid",
        name: "SendGrid",
        description: "i18n.collectors.sendgrid.description",
        version: "0",
        website: "https://app.sendgrid.com/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4010.jpg",
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
        entryUrl: "https://app.sendgrid.com/settings/billing",
    }

    constructor() {
        super(SendgridCollector.CONFIG);
    }
}
