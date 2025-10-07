
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MaildosoCollector extends SketchCollector {

    static CONFIG = {
        id: "maildoso",
        name: "Maildoso",
        description: "i18n.collectors.maildoso.description",
        version: "0",
        website: "https://app.maildoso.com/accounts",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4417746.jpg",
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
        entryUrl: "https://app.maildoso.com/accounts",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MaildosoCollector.CONFIG);
    }
}
