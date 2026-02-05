
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class DirectEnergyRegulatedServicesCollector extends SketchCollector {

    static CONFIG = {
        id: "direct_energy_regulated_services",
        name: "Direct Energy Regulated Services",
        description: "i18n.collectors.direct_energy_regulated_services.description",
        version: "0",
        website: "https://www.directenergyregulatedservices.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/245481.jpg",
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
        loginUrl: "https://www.directenergyregulatedservices.com/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(DirectEnergyRegulatedServicesCollector.CONFIG);
    }
}
