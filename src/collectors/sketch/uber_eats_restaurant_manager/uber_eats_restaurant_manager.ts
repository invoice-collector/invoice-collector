
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class UberEatsRestaurantManagerCollector extends SketchCollector {

    static CONFIG = {
        id: "uber_eats_restaurant_manager",
        name: "Uber Eats Restaurant Manager",
        description: "i18n.collectors.uber_eats_restaurant_manager.description",
        version: "0",
        website: "https://restaurant.uber.com/invoices",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/167035.jpg",
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
        entryUrl: "https://restaurant.uber.com/invoices",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(UberEatsRestaurantManagerCollector.CONFIG);
    }
}
