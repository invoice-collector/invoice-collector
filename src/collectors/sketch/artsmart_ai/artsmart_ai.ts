
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ArtsmartAiCollector extends SketchCollector {

    static CONFIG = {
        id: "artsmart_ai",
        name: "ArtSmart AI",
        description: "i18n.collectors.artsmart_ai.description",
        version: "0",
        website: "https://billing.stripe.com/p/session/live_YWNjdF8xTHNLTmFMb1pCN0lxQ2RvLF9PVU9zVzhESnNPZ1o2aWZ0eDhRTHk0ZXlrbHBQajZr0100qcAJxUiA",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2104138.jpg",
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
        entryUrl: "https://billing.stripe.com/p/session/live_YWNjdF8xTHNLTmFMb1pCN0lxQ2RvLF9PVU9zVzhESnNPZ1o2aWZ0eDhRTHk0ZXlrbHBQajZr0100qcAJxUiA",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ArtsmartAiCollector.CONFIG);
    }
}
