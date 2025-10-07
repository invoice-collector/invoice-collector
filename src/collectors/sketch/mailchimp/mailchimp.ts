
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailchimpCollector extends SketchCollector {

    static CONFIG = {
        id: "mailchimp",
        name: "MailChimp",
        description: "i18n.collectors.mailchimp.description",
        version: "0",
        website: "https://www.mailchimp.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/411.jpg",
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
        entryUrl: "https://www.mailchimp.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailchimpCollector.CONFIG);
    }
}
