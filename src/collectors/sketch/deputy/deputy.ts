
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class DeputyCollector extends SketchCollector {

    static CONFIG = {
        id: "deputy",
        name: "Deputy",
        description: "i18n.collectors.deputy.description",
        version: "0",
        website: "https://once.deputy.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/102634.jpg",
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
        entryUrl: "https://once.deputy.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(DeputyCollector.CONFIG);
    }
}
