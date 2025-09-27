
import { SketchCollector } from '../../sketchCollector';

export class InflowInventoryCollector extends SketchCollector {

    static CONFIG = {
        id: "inflow_inventory",
        name: "Inflow Inventory",
        description: "i18n.collectors.inflow_inventory.description",
        version: "0",
        website: "https://app.inflowinventory.com/options/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/153979.jpg",
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
        entryUrl: "https://app.inflowinventory.com/options/account",
    }

    constructor() {
        super(InflowInventoryCollector.CONFIG);
    }
}
