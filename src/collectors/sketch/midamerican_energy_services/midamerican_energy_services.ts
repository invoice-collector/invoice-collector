
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class MidamericanEnergyServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "midamerican_energy_services",
        name: "Midamerican Energy Services",
        description: "i18n.collectors.midamerican_energy_services.description",
        version: "0",
        website: "https://www.midamericanenergyservices.com/ema",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387616.jpg",
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
        loginUrl: "https://www.midamericanenergyservices.com/ema",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MidamericanEnergyServicesCollector.CONFIG);
    }
}
