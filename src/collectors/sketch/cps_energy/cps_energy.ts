
import { SketchCollector } from '../../sketchCollector';

export class CpsEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "cps_energy",
        name: "CPS Energy",
        description: "i18n.collectors.cps_energy.description",
        version: "0",
        website: "https://secure.cpsenergy.com/mma/pastBills.jsp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/240027.jpg",
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
        entryUrl: "https://secure.cpsenergy.com/mma/pastBills.jsp",
    }

    constructor() {
        super(CpsEnergyCollector.CONFIG);
    }
}
