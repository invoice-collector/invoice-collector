
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BurbankWaterAndPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "burbank_water_and_power",
        name: "Burbank Water and Power",
        description: "i18n.collectors.burbank_water_and_power.description",
        version: "0",
        website: "https://my.burbankwaterandpower.com/Portal/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4178564.jpg",
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
        entryUrl: "https://my.burbankwaterandpower.com/Portal/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BurbankWaterAndPowerCollector.CONFIG);
    }
}
