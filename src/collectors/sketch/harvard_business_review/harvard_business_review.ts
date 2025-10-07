
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HarvardBusinessReviewCollector extends SketchCollector {

    static CONFIG = {
        id: "harvard_business_review",
        name: "Harvard Business Review",
        description: "i18n.collectors.harvard_business_review.description",
        version: "0",
        website: "https://hbr.org/my-library/orders",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1242576.jpg",
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
        entryUrl: "https://hbr.org/my-library/orders",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HarvardBusinessReviewCollector.CONFIG);
    }
}
