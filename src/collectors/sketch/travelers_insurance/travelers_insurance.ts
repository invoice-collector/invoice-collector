
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TravelersInsuranceCollector extends SketchCollector {

    static CONFIG = {
        id: "travelers_insurance",
        name: "Travelers Insurance",
        description: "i18n.collectors.travelers_insurance.description",
        version: "0",
        website: "https://signin.travelers.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2385156.jpg",
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
        entryUrl: "https://signin.travelers.com/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TravelersInsuranceCollector.CONFIG);
    }
}
