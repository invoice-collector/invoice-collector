
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HostTrackerCollector extends SketchCollector {

    static CONFIG = {
        id: "host_tracker",
        name: "Host Tracker",
        description: "i18n.collectors.host_tracker.description",
        version: "0",
        website: "https://www.host-tracker.com/billing/payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2556698.jpg",
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
        entryUrl: "https://www.host-tracker.com/billing/payments",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HostTrackerCollector.CONFIG);
    }
}
