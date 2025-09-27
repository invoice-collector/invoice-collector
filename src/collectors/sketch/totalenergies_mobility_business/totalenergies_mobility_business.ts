
import { SketchCollector } from '../../sketchCollector';

export class TotalenergiesMobilityBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "totalenergies_mobility_business",
        name: "TotalEnergies - Mobility Business",
        description: "i18n.collectors.totalenergies_mobility_business.description",
        version: "0",
        website: "https://client.mobilitybusiness.totalenergies.com/invoices/detail",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4438839.jpg",
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
        entryUrl: "https://client.mobilitybusiness.totalenergies.com/invoices/detail",
    }

    constructor() {
        super(TotalenergiesMobilityBusinessCollector.CONFIG);
    }
}
