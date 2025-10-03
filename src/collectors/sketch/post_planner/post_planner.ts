
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PostPlannerCollector extends SketchCollector {

    static CONFIG = {
        id: "post_planner",
        name: "Post Planner",
        description: "i18n.collectors.post_planner.description",
        version: "0",
        website: "https://www.billingportal.com/s/postplanner/statements",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/65931.jpg",
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
        entryUrl: "https://www.billingportal.com/s/postplanner/statements",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PostPlannerCollector.CONFIG);
    }
}
