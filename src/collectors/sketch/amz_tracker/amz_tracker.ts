
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AmzTrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "amz_tracker",
        name: "AMZ Tracker",
        description: "i18n.collectors.amz_tracker.description",
        version: "0",
        website: "https://www.amztracker.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19834.jpg",
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
        entryUrl: "https://www.amztracker.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AmzTrackerCollector.CONFIG);
    }
}
