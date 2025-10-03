
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FingerprintCollector extends SketchCollector {

    static CONFIG = {
        id: "fingerprint",
        name: "Fingerprint",
        description: "i18n.collectors.fingerprint.description",
        version: "0",
        website: "https://dashboard.fingerprint.com/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1802701.jpg",
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
        entryUrl: "https://dashboard.fingerprint.com/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FingerprintCollector.CONFIG);
    }
}
