
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BhnRewardsCollector extends SketchCollector {

    static CONFIG = {
        id: "bhn_rewards",
        name: "BHN Rewards",
        description: "i18n.collectors.bhn_rewards.description",
        version: "0",
        website: "https://app.rybbon.net/ui/reports/payment-report",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2690878.jpg",
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
        entryUrl: "https://app.rybbon.net/ui/reports/payment-report",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BhnRewardsCollector.CONFIG);
    }
}
