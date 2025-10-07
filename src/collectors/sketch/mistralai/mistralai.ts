import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MistralAiCollector extends SketchCollector {

    static CONFIG = {
        id: "mistralai",
        name: "Mistral",
        description: "i18n.collectors.mistralai.description",
        version: "0",
        website: "https://mistral.ai",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg",
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
        entryUrl: "https://admin.mistral.ai/organization/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MistralAiCollector.CONFIG);
    }
}
