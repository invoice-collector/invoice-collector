
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class InventoryPlannerCollector extends SketchCollector {

    static CONFIG = {
        id: "inventory_planner",
        name: "Inventory Planner",
        description: "i18n.collectors.inventory_planner.description",
        version: "0",
        website: "https://app.inventory-planner.com/#/settings/billing?a=a1988",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/510886.jpg",
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
        entryUrl: "https://app.inventory-planner.com/#/settings/billing?a=a1988",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(InventoryPlannerCollector.CONFIG);
    }
}
