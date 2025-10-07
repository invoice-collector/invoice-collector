
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MailshakeCollector extends SketchCollector {

    static CONFIG = {
        id: "mailshake",
        name: "mailshake",
        description: "i18n.collectors.mailshake.description",
        version: "0",
        website: "https://mailshake.com/app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/74050.jpg",
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
        entryUrl: "https://mailshake.com/app/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MailshakeCollector.CONFIG);
    }
}
