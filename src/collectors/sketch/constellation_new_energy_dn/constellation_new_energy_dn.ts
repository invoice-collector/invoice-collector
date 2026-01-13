
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class ConstellationNewEnergyDnCollector extends SketchCollector {

    static CONFIG = {
        id: "constellation_new_energy_dn",
        name: "Constellation New Energy DN",
        description: "i18n.collectors.constellation_new_energy_dn.description",
        version: "0",
        website: "https://energymanager.constellation.com/CustomerDashboard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2723643.jpg",
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
        loginUrl: "https://energymanager.constellation.com/CustomerDashboard",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(ConstellationNewEnergyDnCollector.CONFIG);
    }
}
