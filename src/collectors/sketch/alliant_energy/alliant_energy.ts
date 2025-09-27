
import { SketchCollector } from '../../sketchCollector';

export class AlliantEnergyCollector extends SketchCollector {

    static CONFIG = {
        id: "alliant_energy",
        name: "Alliant Energy",
        description: "i18n.collectors.alliant_energy.description",
        version: "0",
        website: "https://myaccount.alliantenergy.com/Portal//BillDashboard.aspx",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1953790.jpg",
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
        entryUrl: "https://myaccount.alliantenergy.com/Portal//BillDashboard.aspx",
    }

    constructor() {
        super(AlliantEnergyCollector.CONFIG);
    }
}
