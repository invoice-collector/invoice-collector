
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class EnergyManagementSystemsCollector extends SketchCollector {

    static CONFIG = {
        id: "energy_management_systems",
        name: "Energy Management Systems",
        description: "i18n.collectors.energy_management_systems.description",
        version: "0",
        website: "https://portal.ems3.com/consumer/bill-copy",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732306.jpg",
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
        loginUrl: "https://portal.ems3.com/consumer/bill-copy",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EnergyManagementSystemsCollector.CONFIG);
    }
}
