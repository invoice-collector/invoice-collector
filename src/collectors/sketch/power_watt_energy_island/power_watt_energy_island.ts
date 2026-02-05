
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PowerWattEnergyIslandCollector extends SketchCollector {

    static CONFIG = {
        id: "power_watt_energy_island",
        name: "Power Watt Energy Island",
        description: "i18n.collectors.power_watt_energy_island.description",
        version: "0",
        website: "https://pwe.wolfcrm.es/intranet/#wrapper",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4486896.jpg",
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
        loginUrl: "https://pwe.wolfcrm.es/intranet/#wrapper",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PowerWattEnergyIslandCollector.CONFIG);
    }
}
