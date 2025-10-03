
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NatifAiCollector extends SketchCollector {

    static CONFIG = {
        id: "natif_ai",
        name: "Natif.ai",
        description: "i18n.collectors.natif_ai.description",
        version: "0",
        website: "https://platform.natif.ai/api-hub/workflow/invoice_extraction/live-interface",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1968084.jpg",
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
        entryUrl: "https://platform.natif.ai/api-hub/workflow/invoice_extraction/live-interface",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NatifAiCollector.CONFIG);
    }
}
