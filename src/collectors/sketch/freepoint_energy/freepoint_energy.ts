
import { SketchCollector } from '../../sketchCollector';

export class FreepointEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "freepoint_energy",
        name: "Freepoint Energy",
        description: "i18n.collectors.freepoint_energy.description",
        version: "0",
        website: "https://csp.freepointsolutions.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2409472.jpg",
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
        entryUrl: "https://csp.freepointsolutions.com/login",
    }

    constructor() {
        super(FreepointEnergyCollector.CONFIG);
    }
}
