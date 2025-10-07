
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhotonEngineCollector extends SketchCollector {

    static CONFIG = {
        id: "photon_engine",
        name: "Photon Engine",
        description: "i18n.collectors.photon_engine.description",
        version: "0",
        website: "https://dashboard.photonengine.com/en-US/Billing/BillingAccount#acc-statement-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/777345.jpg",
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
        entryUrl: "https://dashboard.photonengine.com/en-US/Billing/BillingAccount#acc-statement-history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PhotonEngineCollector.CONFIG);
    }
}
