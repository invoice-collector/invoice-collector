
import { SketchCollector } from '../../sketchCollector';

export class MidamericanEnergyServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "midamerican_energy_services",
        name: "Midamerican Energy Services",
        description: "i18n.collectors.midamerican_energy_services.description",
        version: "0",
        website: "https://www.midamericanenergyservices.com/ema",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2387616.jpg",
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
        entryUrl: "https://www.midamericanenergyservices.com/ema",
    }

    constructor() {
        super(MidamericanEnergyServicesCollector.CONFIG);
    }
}
