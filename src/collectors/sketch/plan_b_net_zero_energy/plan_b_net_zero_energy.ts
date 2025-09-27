
import { SketchCollector } from '../../sketchCollector';

export class PlanBNetZeroEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "plan_b_net_zero_energy",
        name: "Plan-B Net Zero Energy",
        description: "i18n.collectors.plan_b_net_zero_energy.description",
        version: "0",
        website: "https://kundenportal.planbnetzero-energy.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/4006037.jpg",
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
        entryUrl: "https://kundenportal.planbnetzero-energy.com/",
    }

    constructor() {
        super(PlanBNetZeroEnergyCollector.CONFIG);
    }
}
