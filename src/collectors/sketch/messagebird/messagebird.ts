
import { SketchCollector } from '../../sketchCollector';

export class MessagebirdCollector extends SketchCollector {

    static CONFIG = {
        id: "messagebird",
        name: "MessageBird",
        description: "i18n.collectors.messagebird.description",
        version: "0",
        website: "https://dashboard.messagebird.com/de-de/financial/list",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/7976.jpg",
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
        entryUrl: "https://dashboard.messagebird.com/de-de/financial/list",
    }

    constructor() {
        super(MessagebirdCollector.CONFIG);
    }
}
