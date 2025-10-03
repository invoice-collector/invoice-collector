
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class IngramMicroCloudCollector extends SketchCollector {

    static CONFIG = {
        id: "ingram_micro_cloud",
        name: "INGRAM MICRO CLOUD",
        description: "i18n.collectors.ingram_micro_cloud.description",
        version: "0",
        website: "https://cp.at.eu.cloud.im/ccp/v/pa/ccp-billing/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/899951.jpg",
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
        entryUrl: "https://cp.at.eu.cloud.im/ccp/v/pa/ccp-billing/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(IngramMicroCloudCollector.CONFIG);
    }
}
