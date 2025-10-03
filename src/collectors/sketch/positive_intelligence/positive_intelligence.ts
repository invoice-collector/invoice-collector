
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PositiveIntelligenceCollector extends SketchCollector {

    static CONFIG = {
        id: "positive_intelligence",
        name: "Positive Intelligence",
        description: "i18n.collectors.positive_intelligence.description",
        version: "0",
        website: "https://coach.positiveintelligence.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4488112.jpg",
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
        entryUrl: "https://coach.positiveintelligence.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PositiveIntelligenceCollector.CONFIG);
    }
}
