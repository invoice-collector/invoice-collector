
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SmartSenderCollector extends SketchCollector {

    static CONFIG = {
        id: "smart_sender",
        name: "Smart Sender",
        description: "i18n.collectors.smart_sender.description",
        version: "0",
        website: "https://console.smartsender.com/me/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4199152.jpg",
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
        entryUrl: "https://console.smartsender.com/me/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SmartSenderCollector.CONFIG);
    }
}
