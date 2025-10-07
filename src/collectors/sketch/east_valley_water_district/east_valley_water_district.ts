
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EastValleyWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "east_valley_water_district",
        name: "East Valley Water District",
        description: "i18n.collectors.east_valley_water_district.description",
        version: "0",
        website: "https://www.municipalonlinepayments.com/eastvalleywd/utilities",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723590.jpg",
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
        entryUrl: "https://www.municipalonlinepayments.com/eastvalleywd/utilities",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EastValleyWaterDistrictCollector.CONFIG);
    }
}
