
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LocalFalconCollector extends SketchCollector {

    static CONFIG = {
        id: "local_falcon",
        name: "Local Falcon",
        description: "i18n.collectors.local_falcon.description",
        version: "0",
        website: "https://www.localfalcon.com/billing/transactions",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2077748.jpg",
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
        entryUrl: "https://www.localfalcon.com/billing/transactions",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LocalFalconCollector.CONFIG);
    }
}
