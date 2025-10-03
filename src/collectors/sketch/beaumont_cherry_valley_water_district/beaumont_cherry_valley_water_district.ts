
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BeaumontCherryValleyWaterDistrictCollector extends SketchCollector {

    static CONFIG = {
        id: "beaumont_cherry_valley_water_district",
        name: "Beaumont-Cherry Valley Water District",
        description: "i18n.collectors.beaumont_cherry_valley_water_district.description",
        version: "0",
        website: "https://bcvwd.merchanttransact.com/secure/MyBill",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2724340.jpg",
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
        entryUrl: "https://bcvwd.merchanttransact.com/secure/MyBill",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BeaumontCherryValleyWaterDistrictCollector.CONFIG);
    }
}
