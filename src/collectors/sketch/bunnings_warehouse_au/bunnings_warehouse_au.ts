
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BunningsWarehouseAuCollector extends SketchCollector {

    static CONFIG = {
        id: "bunnings_warehouse_au",
        name: "Bunnings Warehouse.au",
        description: "i18n.collectors.bunnings_warehouse_au.description",
        version: "0",
        website: "https://www.bunnings.com.au/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8651.jpg",
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
        entryUrl: "https://www.bunnings.com.au/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BunningsWarehouseAuCollector.CONFIG);
    }
}
