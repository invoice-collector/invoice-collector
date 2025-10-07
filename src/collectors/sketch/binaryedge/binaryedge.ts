
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BinaryedgeCollector extends SketchCollector {

    static CONFIG = {
        id: "binaryedge",
        name: "binaryedge",
        description: "i18n.collectors.binaryedge.description",
        version: "0",
        website: "https://www.binaryedge.io/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1217691.jpg",
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
        entryUrl: "https://www.binaryedge.io/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BinaryedgeCollector.CONFIG);
    }
}
