
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReadAiCollector extends SketchCollector {

    static CONFIG = {
        id: "read_ai",
        name: "Read AI",
        description: "i18n.collectors.read_ai.description",
        version: "0",
        website: "https://app.read.ai/analytics/settings/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4196327.jpg",
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
        entryUrl: "https://app.read.ai/analytics/settings/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReadAiCollector.CONFIG);
    }
}
