
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ChatarminCollector extends SketchCollector {

    static CONFIG = {
        id: "chatarmin",
        name: "Chatarmin",
        description: "i18n.collectors.chatarmin.description",
        version: "0",
        website: "https://chatarmin.com/dashboard/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2973183.jpg",
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
        entryUrl: "https://chatarmin.com/dashboard/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ChatarminCollector.CONFIG);
    }
}
