
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailerliteNewCollector extends SketchCollector {

    static CONFIG = {
        id: "mailerlite_new",
        name: "MailerLite NEW",
        description: "i18n.collectors.mailerlite_new.description",
        version: "0",
        website: "https://accounts.mailerlite.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2079260.jpg",
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
        entryUrl: "https://accounts.mailerlite.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailerliteNewCollector.CONFIG);
    }
}
