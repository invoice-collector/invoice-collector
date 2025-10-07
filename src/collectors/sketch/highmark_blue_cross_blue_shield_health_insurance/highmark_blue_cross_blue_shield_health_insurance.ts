
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HighmarkBlueCrossBlueShieldHealthInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "highmark_blue_cross_blue_shield_health_insurance",
        name: "Highmark Blue Cross Blue Shield Health Insurance",
        description: "i18n.collectors.highmark_blue_cross_blue_shield_health_insurance.description",
        version: "0",
        website: "https://employer.highmark.com/billing/group/invoice",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3377948.jpg",
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
        entryUrl: "https://employer.highmark.com/billing/group/invoice",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HighmarkBlueCrossBlueShieldHealthInsuranceCollector.CONFIG);
    }
}
