
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class ReviewforestCollector extends SketchCollector {

    static CONFIG = {
        id: "reviewforest",
        name: "ReviewForest",
        description: "i18n.collectors.reviewforest.description",
        version: "0",
        website: "https://app.reviewforest.org/settings/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/239871.jpg",
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
        entryUrl: "https://app.reviewforest.org/settings/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ReviewforestCollector.CONFIG);
    }
}
