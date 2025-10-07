
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailflossCollector extends SketchCollector {

    static CONFIG = {
        id: "mailfloss",
        name: "MailFloss",
        description: "i18n.collectors.mailfloss.description",
        version: "0",
        website: "https://app.mailfloss.com/plans",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/166540.jpg",
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
        entryUrl: "https://app.mailfloss.com/plans",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailflossCollector.CONFIG);
    }
}
