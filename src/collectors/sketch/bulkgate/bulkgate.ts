
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BulkgateCollector extends SketchCollector {

    static CONFIG = {
        id: "bulkgate",
        name: "BulkGate",
        description: "i18n.collectors.bulkgate.description",
        version: "0",
        website: "https://www.bulkgate.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/792023.jpg",
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
        entryUrl: "https://www.bulkgate.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BulkgateCollector.CONFIG);
    }
}
