
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FlowCollector extends SketchCollector {

    static CONFIG = {
        id: "flow",
        name: "Flow",
        description: "i18n.collectors.flow.description",
        version: "0",
        website: "https://app.getflow.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/29902.jpg",
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
        entryUrl: "https://app.getflow.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FlowCollector.CONFIG);
    }
}
