
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ConversioCollector extends SketchCollector {

    static CONFIG = {
        id: "conversio",
        name: "Conversio",
        description: "i18n.collectors.conversio.description",
        version: "0",
        website: "https://commerce.campaignmonitor.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/117145.jpg",
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
        entryUrl: "https://commerce.campaignmonitor.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConversioCollector.CONFIG);
    }
}
