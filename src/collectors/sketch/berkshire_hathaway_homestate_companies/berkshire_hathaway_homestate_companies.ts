
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BerkshireHathawayHomestateCompaniesCollector extends SketchCollector {

    static CONFIG = {
        id: "berkshire_hathaway_homestate_companies",
        name: "Berkshire Hathaway Homestate Companies",
        description: "i18n.collectors.berkshire_hathaway_homestate_companies.description",
        version: "0",
        website: "https://www.bhhc.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/70082.jpg",
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
        entryUrl: "https://www.bhhc.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BerkshireHathawayHomestateCompaniesCollector.CONFIG);
    }
}
