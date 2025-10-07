
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PepipostCollector extends SketchCollector {

    static CONFIG = {
        id: "pepipost",
        name: "Pepipost",
        description: "i18n.collectors.pepipost.description",
        version: "0",
        website: "https://app.pepipost.com/app/billings/postpaid-billing/history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779616.jpg",
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
        entryUrl: "https://app.pepipost.com/app/billings/postpaid-billing/history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PepipostCollector.CONFIG);
    }
}
