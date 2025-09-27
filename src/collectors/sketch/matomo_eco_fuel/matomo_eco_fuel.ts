
import { SketchCollector } from '../../sketchCollector';

export class MatomoEcoFuelCollector extends SketchCollector {

    static CONFIG = {
        id: "matomo_eco_fuel",
        name: "Matomo Eco Fuel",
        description: "i18n.collectors.matomo_eco_fuel.description",
        version: "0",
        website: "https://eco2fuelproject.matomo.cloud/index.php?module=Billing&action=invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2136014.jpg",
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
        entryUrl: "https://eco2fuelproject.matomo.cloud/index.php?module=Billing&action=invoices",
    }

    constructor() {
        super(MatomoEcoFuelCollector.CONFIG);
    }
}
