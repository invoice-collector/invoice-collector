
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PriorityPassCollector extends SketchCollector {

    static CONFIG = {
        id: "priority_pass",
        name: "Priority Pass",
        description: "i18n.collectors.priority_pass.description",
        version: "0",
        website: "https://www.prioritypass.com/dashboard/my-visits",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4212740.jpg",
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
        entryUrl: "https://www.prioritypass.com/dashboard/my-visits",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PriorityPassCollector.CONFIG);
    }
}
