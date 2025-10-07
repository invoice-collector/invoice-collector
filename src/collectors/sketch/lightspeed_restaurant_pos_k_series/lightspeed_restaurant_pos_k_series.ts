
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class LightspeedRestaurantPosKSeriesCollector extends SketchCollector {

    static CONFIG = {
        id: "lightspeed_restaurant_pos_k_series",
        name: "Lightspeed - Restaurant POS (K-Series)",
        description: "i18n.collectors.lightspeed_restaurant_pos_k_series.description",
        version: "0",
        website: "https://manager.lsk.lightspeed.app/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4449942.jpg",
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
        entryUrl: "https://manager.lsk.lightspeed.app/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(LightspeedRestaurantPosKSeriesCollector.CONFIG);
    }
}
