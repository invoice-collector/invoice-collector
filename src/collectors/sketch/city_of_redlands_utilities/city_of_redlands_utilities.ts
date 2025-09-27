
import { SketchCollector } from '../../sketchCollector';

export class CityOfRedlandsUtilitiesCollector extends SketchCollector {

    static CONFIG = {
        id: "city_of_redlands_utilities",
        name: "City of Redlands Utilities",
        description: "i18n.collectors.city_of_redlands_utilities.description",
        version: "0",
        website: "https://myredconnectaccount.org/iwr/billing/billingManager.seam?cid=3694&rvn=1",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724311.jpg",
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
        entryUrl: "https://myredconnectaccount.org/iwr/billing/billingManager.seam?cid=3694&rvn=1",
    }

    constructor() {
        super(CityOfRedlandsUtilitiesCollector.CONFIG);
    }
}
