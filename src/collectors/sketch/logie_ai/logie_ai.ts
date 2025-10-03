
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LogieAiCollector extends SketchCollector {

    static CONFIG = {
        id: "logie_ai",
        name: "Logie.ai",
        description: "i18n.collectors.logie_ai.description",
        version: "0",
        website: "https://mylogie.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2975263.jpg",
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
        entryUrl: "https://mylogie.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LogieAiCollector.CONFIG);
    }
}
