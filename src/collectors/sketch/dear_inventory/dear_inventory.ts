
import { SketchCollector } from '../../sketchCollector';

export class DearInventoryCollector extends SketchCollector {

    static CONFIG = {
        id: "dear_inventory",
        name: "Dear Inventory",
        description: "i18n.collectors.dear_inventory.description",
        version: "0",
        website: "https://inventory.dearsystems.com/Account/Login?ReturnUrl=%2f",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/750168.jpg",
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
        entryUrl: "https://inventory.dearsystems.com/Account/Login?ReturnUrl=%2f",
    }

    constructor() {
        super(DearInventoryCollector.CONFIG);
    }
}
