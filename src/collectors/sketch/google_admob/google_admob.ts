
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GoogleAdmobCollector extends SketchCollector {

    static CONFIG = {
        id: "google_admob",
        name: "Google AdMob",
        description: "i18n.collectors.google_admob.description",
        version: "0",
        website: "https://apps.admob.com/v2/payments/transaction-service",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/419135.jpg",
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
        entryUrl: "https://apps.admob.com/v2/payments/transaction-service",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GoogleAdmobCollector.CONFIG);
    }
}
