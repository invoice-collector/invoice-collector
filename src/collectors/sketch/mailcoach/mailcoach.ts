
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailcoachCollector extends SketchCollector {

    static CONFIG = {
        id: "mailcoach",
        name: "Mailcoach",
        description: "i18n.collectors.mailcoach.description",
        version: "0",
        website: "https://mailcoach.app/download",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2519921.jpg",
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
        entryUrl: "https://mailcoach.app/download",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailcoachCollector.CONFIG);
    }
}
