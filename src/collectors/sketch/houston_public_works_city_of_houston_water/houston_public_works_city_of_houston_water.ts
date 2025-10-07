
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HoustonPublicWorksCityOfHoustonWaterCollector extends SketchCollector {

    static CONFIG = {
        id: "houston_public_works_city_of_houston_water",
        name: "HOUSTON PUBLIC WORKS | City of Houston Water",
        description: "i18n.collectors.houston_public_works_city_of_houston_water.description",
        version: "0",
        website: "https://www.houstonwaterbills.houstontx.gov/ProdDP/Billing/MyUtilityPortal/MyAccountSummary",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/922934.jpg",
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
        entryUrl: "https://www.houstonwaterbills.houstontx.gov/ProdDP/Billing/MyUtilityPortal/MyAccountSummary",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HoustonPublicWorksCityOfHoustonWaterCollector.CONFIG);
    }
}
