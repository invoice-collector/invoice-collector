
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class SpeechmaticsCollector extends SketchCollector {

    static CONFIG = {
        id: "speechmatics",
        name: "Speechmatics",
        description: "i18n.collectors.speechmatics.description",
        version: "0",
        website: "https://portal.speechmatics.com/billing/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4356045.jpg",
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
        entryUrl: "https://portal.speechmatics.com/billing/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(SpeechmaticsCollector.CONFIG);
    }
}
