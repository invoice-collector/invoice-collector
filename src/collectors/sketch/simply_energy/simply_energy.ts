
import { SketchCollector } from '../../sketchCollector';

export class SimplyEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "simply_energy",
        name: "Simply Energy",
        description: "i18n.collectors.simply_energy.description",
        version: "0",
        website: "https://myaccount.simplyenergy.com.au/simplyenergy/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8653.jpg",
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
        entryUrl: "https://myaccount.simplyenergy.com.au/simplyenergy/",
    }

    constructor() {
        super(SimplyEnergyCollector.CONFIG);
    }
}
