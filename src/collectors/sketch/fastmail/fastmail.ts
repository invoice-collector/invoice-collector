
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FastmailCollector extends SketchCollector {

    static CONFIG = {
        id: "fastmail",
        name: "FastMail",
        description: "i18n.collectors.fastmail.description",
        version: "0",
        website: "https://www.fastmail.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111991.jpg",
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
        entryUrl: "https://www.fastmail.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FastmailCollector.CONFIG);
    }
}
