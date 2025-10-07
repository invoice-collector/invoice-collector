
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PhotonCollector extends SketchCollector {

    static CONFIG = {
        id: "photon",
        name: "Photon",
        description: "i18n.collectors.photon.description",
        version: "0",
        website: "https://dashboard.photonengine.com/en-US/Billing/BillingAccount#acc-statement-history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776464.jpg",
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
        super(PhotonCollector.CONFIG);
    }
}
