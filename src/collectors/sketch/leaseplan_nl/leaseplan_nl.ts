
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LeaseplanNlCollector extends SketchCollector {

    static CONFIG = {
        id: "leaseplan_nl",
        name: "LeasePlan.nl",
        description: "i18n.collectors.leaseplan_nl.description",
        version: "0",
        website: "http://www.leaseplan.nl",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/33390.jpg",
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
        entryUrl: "http://www.leaseplan.nl",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LeaseplanNlCollector.CONFIG);
    }
}
