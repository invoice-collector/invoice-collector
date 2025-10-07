
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class FinanzcheckAffiliateCollector extends SketchCollector {

    static CONFIG = {
        id: "finanzcheck_affiliate",
        name: "FinanzCHECK - Affiliate",
        description: "i18n.collectors.finanzcheck_affiliate.description",
        version: "0",
        website: "https://affiliate.finanzcheck.de/dashboard/payoff",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776399.jpg",
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
        entryUrl: "https://affiliate.finanzcheck.de/dashboard/payoff",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(FinanzcheckAffiliateCollector.CONFIG);
    }
}
